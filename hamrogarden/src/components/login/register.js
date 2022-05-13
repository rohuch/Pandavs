import React from "react"
import "./login.css"

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


const Register = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="user singinBx">
                   
                    <div className="formBx">
                        <form>
                            <h2>Register your account</h2>
                            <input type="text" name="" placeholder="Username"></input>
                            <input type="email" name="" placeholder="Email"></input>
                            <input type="password" name="" placeholder="Creat Password"></input>

                            <input type="password" name="" placeholder="Confirm Password"/>
                            <input type="submit" name="" value="Login"/>
                            <p class="signup"> Already have an account?<a href="#" onClick="">Login</a></p>
                        </form>
                    </div>
                    <div class="imgBx">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2xyA1UXB9IMvrfdTqLF8q_dA4bEeXqo3LSBSod2jR36rcv2-bAyoJ6iWc0fwMJhYHlU&usqp=CAU"></img>

                    </div>
                </div>
            
                </div>
            </section>
          
         
        </div>


    )

}



export default Register;