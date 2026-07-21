import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  updateProfile 
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from './firebase';
import { cartcontext } from './cartcontext';

function Login() {
  const { setUser } = useContext(cartcontext);
  const navigate = useNavigate();

  // Local state for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For registration
  const [isSignUp, setIsSignUp] = useState(false); // Toggle login/signup mode
  const [error, setError] = useState('');

  // Helper function to save user info to Firestore 'users' collection
  const saveUserToFirestore = async (firebaseUser, displayName) => {
    try {
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        name: displayName || firebaseUser.displayName || 'No Name',
        email: firebaseUser.email
      });
    } catch (err) {
      console.error("Error saving user to Firestore: ", err);
    }
  };

  // Form submit handler (Email/Password login or signup)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignUp) {
        // Sign Up Mode
        if (!name) {
          setError('Please enter your name');
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Save name to Firebase Auth profile
        await updateProfile(userCredential.user, { displayName: name });
        // Save to Firestore
        await saveUserToFirestore(userCredential.user, name);
        // Save to global React context state
        setUser({
          uid: userCredential.user.uid,
          name: name,
          email: userCredential.user.email
        });
      } else {
        // Login Mode
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Save to Firestore (updates if info changed or makes sure it exists)
        await saveUserToFirestore(userCredential.user, userCredential.user.displayName);
        // Save to global React context state
        setUser({
          uid: userCredential.user.uid,
          name: userCredential.user.displayName || 'User',
          email: userCredential.user.email
        });
      }
      navigate('/pizzamenu'); // Redirect to Home/Menu page upon success!
    } catch (err) {
      setError(err.message.replace('Firebase:', ''));
    }
  };

  // Google Sign-In handler
  const handleGoogleSignIn = async () => {
    setError('');
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      // Save to Firestore
      await saveUserToFirestore(userCredential.user, userCredential.user.displayName);
      // Save to global React context state
      setUser({
        uid: userCredential.user.uid,
        name: userCredential.user.displayName,
        email: userCredential.user.email
      });
      navigate('/pizzamenu');
    } catch (err) {
      setError(err.message.replace('Firebase:', ''));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', backgroundColor: '#F8F9FA', minHeight: '70vh', fontFamily: '"Poppins", "Segoe UI", sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '400px' }}>
        <h2 style={{ color: '#E23744', textAlign: 'center', marginBottom: '20px' }}>
          {isSignUp ? 'Create Account' : 'Login'}
        </h2>

        {error && <div style={{ color: 'red', backgroundColor: '#FEE2E2', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {isSignUp && (
            <input 
              type="text" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' }}
            />
          )}

          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' }}
          />

          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' }}
          />

          <button type="submit" style={{ backgroundColor: '#E23744', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '15px 0', color: '#888' }}>or</div>

        <button 
          onClick={handleGoogleSignIn} 
          style={{ backgroundColor: 'white', color: '#444', border: '1px solid #ddd', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
          Sign in with Google
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>
          {isSignUp ? 'Already have an account?' : 'New User?'} 
          <span 
            onClick={() => { setIsSignUp(!isSignUp); setError(''); }} 
            style={{ color: '#E23744', cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px' }}
          >
            {isSignUp ? 'Log In' : 'SIGN-UP'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
