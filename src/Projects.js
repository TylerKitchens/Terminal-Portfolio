
import frosture from './assets/img/frosture.png'
import cpn from './assets/img/CPN.png'
import sb from './assets/img/seabreeze.png'
import grn from './assets/img/grn.png'
export default function Projects(props) {


    return <div>
        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={grn} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>

        <h2 className="text-center mt-2 font-weight-bold">Georgia River Networks</h2>
        <div className="row justify-content-center">
            <p className="text-center">&#8195;The Georgia river app consists of a mobile guide that allows river goers to easily access information about the Georgia river network. River goers and adventurers will have the ability to identify entrances and exits for the network of rivers in Georgia, research the local wildlife and nearby food and amenity locations during their adventures. With an offline functionality, users will be able to download the river trail ahead of time and access it later.</p>
            <br />
            <p className="text-center">This app never made it to market as it was a school project. We partnered with a local non profit to get all the information. I built this app with an Express backend, Mongo DB and AWS S3 for image storage. </p>
        </div>

        <a target="_blank" href="http://projects.mynmi.net/21s/grnwatertrailsapp/grn-website/" className="text-center d-block">Project Website</a>
        <a target="_blank" href="https://youtu.be/4Gw4M3H_HfU" className="text-center d-block">Video Demo</a>


        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={frosture} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>
        <h2 className="text-center mt-2 font-weight-bold">Frosture</h2>
        <div className="row justify-content-center">
            <p className="text-center">&#8195;Frosture was my first personal project I ever released to the play store. As I was learning to engineer mobile apps my back began to ache from slouching all day. I searched for products that would help me with slouching but these devices were an upwards of $100. Instead I took advantage of the gyroscope built into all smartphone devices to monitor your posture. This is done by placing your device in your front pocket. I have since removed it from the play store and re-released it iOS! This application was built in React Native.</p>
        </div>

        <a target="_blank" href="https://apps.apple.com/us/app/frosture/id1563310730" className="text-center d-block">iOS Link!</a>
        <a target="_blank" href="https://github.com/TylerKitchens/Frosture---Posture-Fix-App" className="text-center d-block">Source Code</a>

        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">

                <img src={cpn} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>
        <h2 className="text-center mt-2">Car Parts Nation</h2>
        <div className="row justify-content-center">
            <p className="text-center">&#8195;Car Parts Nation is a mobile application that competes in all functionalities to popular classified applications. Users are free to post and view anything related to automobiles whether it be a small cable or a whole car. Key features of the application include a realtime chat feature with web sockets, full resolution image storage on AWS S3, and infinite scrolling posts with recycler views. This project was my first application to implement fie storage as well as authentication and Authorization. This application was built in React Native</p>
        </div>

        <a target="_blank" href="https://apps.apple.com/us/app/car-parts-nation/id1448958110" className="text-center d-block">iOS Download!</a>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.carpartsnation&hl=en&gl=us" className="text-center d-block">Android Download!</a>

        <div className="row mt-5">
            <div class="col-4"></div>
            <div class="col-4">
                <img src={sb} height="200" width="200" className="img-fluid mx-auto d-block portfolioImg" />
            </div>
        </div>

        <h2 className="text-center mt-2">Sea Breeze Syrups</h2>
        <div className="row justify-content-center">
            <p className="text-center">&#8195;Sea Breeze Syrups was my first production mobile application. The company needed a more organized solution to emails coming in for service requests and product orders. This mobile application called a series of PHP scripts to save orders and messages in a MySQL database. I learned on the job and felt confident in my development skills after completing this project! </p>
        </div>
        <a target="_blank" className="text-center d-block" href="https://www.seabreezesyrups.com/">Company Website</a>



    </div>;
}