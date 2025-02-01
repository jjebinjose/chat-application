import { ChatEngine } from "react-chat-engine";
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID="14ce03b0-0bf3-4a5f-9402-04be1c23169c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;