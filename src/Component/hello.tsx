import"./hello.css"
import img from '../assets/arrow.png'
import img1 from '../assets/profile1.png'
import img2 from '../assets/greater then.png'
import img3 from '../assets/door icon.png'
function hello(){
    return(
        <>
        <div className="main">
        <div className="top">
            <button className="left">
                <img src={img} alt="" />
            </button>
            <div className="right"><h3>Profile</h3></div>
        </div>
        <div className="bottom">
            <div className="card">
                <div className="top1">
                    <div className="top2">
                        <div className="circle"><h1>AD</h1>
                            <div className="circle1"></div>
                        </div>
                    </div>
                    <div className="middle2"><h3>Admin</h3></div>
                    <div className="bottom2"><p>admin@text.com</p></div>
                </div>
                <div className="middle1">
                    <div className="left3">
                        <div className="left4">
                            <img src={img1} alt=""className="profile" />
                        </div>
                        <div className="right4"><h3>Edit Profile</h3></div>
                    </div>
                    <div className="right3">
                        <div className="arrow">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    </div>
                <div className="bottom1">
                    <div className="left5">
                        <img src={img3} alt="" className="door"/>
                    </div>
                    <div className="right5"><h3>Logout</h3></div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default hello