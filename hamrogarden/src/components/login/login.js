import React from "react"
import "./login.css"

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


const Login = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="user singinBx">
                    <div class="imgBx">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2xyA1UXB9IMvrfdTqLF8q_dA4bEeXqo3LSBSod2jR36rcv2-bAyoJ6iWc0fwMJhYHlU&usqp=CAU"></img>

                    </div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username"></input>
                            <input type="password" name="" placeholder="Password"/>
                            <input type="submit" name="" value="Login"/>
                            <p class="signup"> Dont have an account?<a href="#" onClick="toggleForm();">Sign Up</a></p>
                        </form>
                    </div>
                </div>
            
                </div>
            </section>
          
         
        </div>


    )

}



export default Login;