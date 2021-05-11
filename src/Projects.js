
import frosture from './assets/img/frosture.png'
import cpn from './assets/img/CPN.png'
import sb from './assets/img/seabreeze.png'
import icecream from './assets/img/icecream.png'
export default function Projects(props) {


    return <div>
        <div className="row">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={frosture} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>
        <h2 className="text-center mt-2">Frosture</h2>
        <div className="row justify-content-center">
            <p className="w-50">&#8195;Frosture was my first personal project I ever released to the play store. As I was learning to engineer mobile apps my back began to ache from slouching all day. I searched for products that would help me with slouching but these devices were an upwards of $100. Instead I took advantage of the gyroscope built into all smartphone devices to monitor your posture. This is done by placing your device in your front pocket. I have since removed it from the play store and re-released it iOS!</p>
        </div>

        <a href="#" className="text-center d-block">Download Link! </a>

        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={cpn} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>
        <h2 className="text-center mt-2">Car Parts Nation</h2>
        <div className="row justify-content-center">
            <p className="w-50">&#8195;Car Parts Nation is a mobile application that competes in all functionalities to popular classified applications. Users are free to post and view anything related to automobiles whether that it be a small cable or a whole car. Key features of the application include a realtime chat feature, full resolution image storage, and infinite scrolling posts. This project was my first application to implement fie storage as well as authenticaiton. Please head over to your device's respected app store to get a feel for yourself via the links below.</p>
        </div>

        <a href="#" className="text-center d-block">iOS Download!</a>
        <a href="#" className="text-center d-block">Android Download!</a>

        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={sb} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>
        <h2 className="text-center mt-2">Sea Breeze Syrups</h2>
        <div className="row justify-content-center">
            <p className="w-50">&#8195;Sea Breeze Syrups was my first production mobile application. They were tired of random emails coming in for service requests and  product orders. They wanted a service to organize these and my solution was a mobile application. I learned on the job and felt confident in my development skills after completing this project! </p>
        </div>

        <a href="#" className="text-center d-block">iOS Download!</a>
        <a href="#" className="text-center d-block">Android Download!</a>

        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={icecream} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>
        <h2 className="text-center mt-2">La Michoacana Superior</h2>
        <div className="row justify-content-center">
        <p className="w-50">&#8195;La Michocana Superior is an app that you can receive promotions straight to your phone and receive free items via the built in punch card. This application highlights advanced push notifications to users as well as creativity with the virtual punch card. The app has over 200 daily users and 2000 installs!</p>
        </div>

        <a href="#" className="text-center d-block">iOS Download!</a>
        <a href="#" className="text-center d-block">Android Download!</a>
    </div>;
}