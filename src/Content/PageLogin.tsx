import { Button, TextField } from '@mui/material';
import react from 'react';
import '../css/login.css';
function Login() {
    return(
        <div className="container">
            <div className="Boxlogin">
                <h3 className="texthead">เข้าสู่ระบบ</h3>
                <div className="inputtext"><TextField id="outlined-basic" label="Username" variant="outlined" /></div>
                <div className="inputtext"><TextField id="outlined-basic" label="Password" variant="outlined" /></div>
                <div className="inputtext"><Button>ลืมรหัสผ่าน?</Button></div>
                <Button variant="contained">เข้าสู่ระบบ</Button>
            </div>
        </div>
    );
}
export default Login;