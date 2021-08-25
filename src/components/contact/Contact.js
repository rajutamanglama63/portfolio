import { Button, TextField } from '@material-ui/core'
import './contact.scss'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! your message will be replied soon.")
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/undraw_Agreement_re_d4dv.png" alt="handShake" />
            </div>
            <div className="right">
                <h1>Contact</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} >
                    <div className="info">
                        <TextField className="space" fullWidth variant="outlined" placeholder="First name" margin="dense"/>
                        <TextField className="space" fullWidth variant="outlined" placeholder="Last name" margin="dense"/>
                    </div>
                    <TextField placeholder="Mobile no." type="number" fullWidth variant="outlined" margin="dense"/>
                    <TextField placeholder="demo@example.com" fullWidth variant="outlined" margin="dense" />
                    <TextField placeholder="Message" fullWidth variant="outlined" multiline rows={4} />
                    <Button type="submit" color="primary" fullWidth variant="contained">submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact
