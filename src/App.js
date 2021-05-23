import './App.css';
import React from 'react';

import me from './assets/img/me2.png'
import realMe from './assets/img/real-me.png'

import Projects from './Projects'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      command: '',
      history: '',
      showImage: false,
      eightbit: false,
      showDownload: false,
      isContact: false,
      email: '',
      msg: '',
      cIndex: 0,
      prompt: "$",
      showProjects: false

    }

    this.cursor = React.createRef();
    this.bottom = React.createRef();
    this.area = React.createRef();
  }

  componentDidMount() {
    this.cursor.current.focus();
  }
  runCommand = (cmd) => {
    if (this.state.isContact) {
      if (this.state.cIndex == 0) {
        //Todo check Email
        if (this.validEmail(cmd)) {
          this.setState({ history: this.state.history + "\n$ Email: " + cmd, email: cmd, prompt: '$ Msg: ', command: '', cIndex: 1 }, () => {
            this.area.current.focus()
          })
        } else {
          this.setState({ history: this.state.history + "\n .Please enter a valid email", command: '' })
        }

      }
    } else {


      this.setState({ history: this.state.history + "\n$ " + this.state.command + '\u000A' }, () => {

        switch (cmd.toLowerCase().split(" ")[0]) {
          case "help":
            this.runHelp()
            break;
          case "clear":
            this.setState({ history: "", showProjects: false, showImage : false })
            break;
          case "ls":
            this.runLS()
            break;
          case "cat":
            this.runCat(cmd)
            break;
          case "contact":
            this.runContact()
            break;
          case "github":
            this.runView()
            break;
          case "nmi":
            this.runNMI()
            break;
        }

        this.setState({ command: '' })

        this.bottom.current.scrollIntoView({ behavior: 'smooth' })
      })
    }

  }

  runNMI = () => {
    const link = document.createElement('a');
    link.setAttribute("target", "__blank")
    link.href = `https://tkitchappdesign.com/nmc/`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  validEmail = email => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());

  }

  runView = () => {
    const link = document.createElement('a');
    link.setAttribute("target", "__blank")
    link.href = `https://github.com/TylerKitchens/Terminal-Portfolio/tree/master`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  runContact = () => {

    this.setState({ history: "$ contact", prompt: '$ Email: ', isContact: true }, () => {

    })


  }
  runHelp = () => {
    const helpTxt = "available commands...\n   .cat\n +--display contents of a file\n +-- \"cat About.txt\" displays contents of About.txt\n     .ls\n +-- show all available files for cat\n     .help\n +-- show all commands\n     .clear\n +-- clear previous terminal input\n .contact\n +--sends me an email\n .github\n +--view source code of this website\n .nmi\n +-- show my New Media Portfolio"
    this.setState({ history: "$ help\n" + helpTxt, showImage: false })
  }

  runLS = () => {

    const lsTxt = "about.txt \n projects.txt \n 8bit-me.png \n real-me.png \nresume.pdf"
    this.setState({ history: "$ ls\n" + lsTxt, showImage: false })
  }


  runCat = (cmd) => {

    const words = cmd.trim().split(' ')
    if (words.length !== 2) {
      this.setState({
        history: "$ " + cmd + "\n ERROR: cat takes only 1 argument.\n Please enter the file you wish to view. \n .Example: ' cat About.txt '"
      })
    } else {
      switch (words[1].toLowerCase()) {
        case "about.txt":
          this.setState({
            history: "$ " + cmd + "\nHello! My Name is Tyler Kitchens. I graduated from the University of Georgia in 2021 with a bachelor’s degree in computer science. Alongside this, I also completed the New Media Certificate. My first lines of code were written on a shared, family computer to set up a Minecraft Server for my buddies and I can remember thinking the FBI was going to knock on my door after opening the terminal! I have hundreds of hours of programming experience since than and continue to further my education. \n" +
              "I was contracted for the first time to develop a mobile app in 2018. I had little to none mobile development experience when I was hired and had to learn on the job. This was my first time getting paid to write lines of code and have since been addicted to it. I was programming as a hobby up until then. I know have 4 published mobile apps on Google’s Play Store, and Apple’s App Store. \n " +
              "I mostly develop mobile apps but have fell in love with developing web apps as well. Fun fact: I strangely am the only person in the world who chooses JavaScript as their favorite language! The website you are reading this text on right now was developed with JS and React! I write the backends to my apps in Node.js as well but have since been writing the calls in AWS lambdas to save money! If you want to read more about my technical skills, open my resume! \n" +
              "When I am not at my desk, I enjoy fishing, kayaking, and trail riding my Jeep. I like to think of myself as a rare breed that likes the technology side of the world and the beauty of the outdoors! "
          })
          break;
        case "8bit-me.png":
          this.setState({ showImage: true, eightbit: true, history: "$ " + cmd })
          break;
        case "real-me.png":
          this.setState({ showImage: true, eightbit: false, history: "$ " + cmd })
          break;
        case "resume.pdf":
          const link = document.createElement('a');
          link.setAttribute("target", "__blank")
          link.href = `/Kitchens-Resume.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          break;
        case "projects.txt":
          this.setState({ showProjects: true }, () => {
            this.bottom.current.scrollIntoView({ behavior: 'smooth' })

          })
      }
    }

  }




  checkForEnter = e => {

    if (e.keyCode === 13) {
      if (this.state.isContact && this.state.cIndex == 1) {

        this.contactSubmit()
      } else {
        this.runCommand(this.state.command)
      }

    }

  }

  contactSubmit = async () => {
    console.log("From: " + this.state.email)
    console.log("Msg: " + this.state.msg)
    this.setState({ history: "$ contact\n .Message Sent Successfully", msg: '', email: '', prompt: "$", isContact: false, cIndex: 0 }, async () => {
      this.cursor.current.focus();
      var formData = new FormData()
      formData.append('msg', this.state.msg)
      formData.append('email', this.state.email)
      try {
        let response = await fetch(
          'https://tkitchappdesign.com/contactForm.php', {
          method: 'POST',
         
          body: formData
        }
        );
        let code = response.status;
        if (code == 200) {
          console.log('success')
        } else {
          console.log('err')
        }

      } catch (error) {
        // err()
        console.error(error);
        return false
      }

    })
  }


  render() {


    return (
      <div className="App">
        <div className='container p-2'>
          <h1 className='text-center'>I'm Tyler Kitchens And Welcome To My Interactive Portfolio</h1>

          <p className="text-center mt-3 text-white">Type "help" for a list of commands</p>
          {this.state.showProjects && <Projects />}
          {this.state.showImage && <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <img src={this.state.eightbit ? me : realMe} height="200" width="200" className="img-fluid mx-auto d-block circle" />
            </div>
          </div>}


          <div className="row justify-content-center align-self-stretch">

            <div className='w-50'>

              {this.state.history != '' && this.state.history.split('\n').map(i => {
                console.log("First: " + i.trim().charAt(0))
                if (i.trim().charAt(0) === '$') {
                  return <p>{i}</p>
                }
                //Some jank ass code to make it tab more
                else if (i.trim().charAt(0) == '.') {
                  console.log('here')
                  return <p>&emsp; &emsp; &emsp; {i.trim().slice(1)}</p>
                }

                //Some jank ass code to make it tab more
                else if (i.trim().charAt(0) == '+') {
                  console.log('here')
                  return <p>&emsp; &emsp; &emsp; &emsp; {i.trim().slice(1)}</p>
                }
                else {
                  return <p>&emsp; &emsp; {i}</p>
                }

              })}

              <div className='row justify-content-start '>
                <div className="col-md-2 align-items-end justify-contend-end "><p id="prompt" className="mt-1 text-start" >{this.state.prompt}</p></div>
                <div className="col-md-10 ">
                  {this.state.cIndex != 1 && <input onKeyDown={e => this.checkForEnter(e)} ref={this.cursor} type='text' name="command" id="command" className="w-100" value={this.state.command} onChange={e => this.setState({ command: e.target.value })} />}
                  {this.state.cIndex == 1 && <textarea onKeyDown={e => this.checkForEnter(e)} rows='4' cols='53' maxlength="180" ref={this.area} id='area' className="w-100" value={this.state.msg} onChange={e => this.setState({ msg: e.target.value })} ></textarea>}
                </div>
              </div>
            </div>
          </div>

        </div>
        <span id='nothing' className="mb-5 mt-5" ref={this.bottom}> </span>
      </div>
    );

  }
}

export default App;
