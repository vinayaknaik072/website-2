import"./hello.css"
import img from '../assets/arrow.png'
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
                <div className="middle1"></div>
                <div className="bottom1"></div>
            </div>
        </div>
        </div>
        </>
    )
}
export default hello