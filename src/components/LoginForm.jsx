import {useState} from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const authObject ={ 'Project-ID' :"e396adad-f4b8-4ca4-a28c-14f445532b10", 'User-Name' : username,'User-Secret': password};
        
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
      
            window.location.reload();
            setError('');
          }
           catch (err) {
            setError('Oops, incorrect credentials.');
          }

    }

    return (
        <div className = "wrapper">
            <div className = "form">
                <h1 className="title "> chat app</h1>
                <form onSubmit = {handleSubmit}>
                <input type = "text"  value = {username} onChange={(e) => setUsername(e.target.value)} className ="input" placeholder="username" required/>
                <input type = "password"  value = {password} onChange={(e) => setPassword(e.target.value)} className ="input" placeholder="password" required/>
                <div align="center">
                    <button type = "submit" className = "button">
                        <span> Start Chat</span>
                    </button>
                </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
}
export default LoginForm;