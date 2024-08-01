import './App.css';
import gptLogo from '../src/assets/chatgpt.svg'
import home from '../src/assets/home.svg'
import saved from '../src/assets/bookmark.svg'
import rocket from '../src/assets/rocket.svg'
import addBtn from '../src/assets/add-30.png'
import msgIcon from './assets/message.svg'
import sendBtn from '../src/assets/send.svg'
import userIcon from '../src/assets/user.jpeg'
import gptImgLogo from '../src/assets/chatgptLogo.svg'


function App() {
  return (
    <div className="App">
      <div className={'sideBar'}>
        <div className={'upperSide'}>
          <div className={'upperSideTop'}>
            <div className={'logoBtn'}>
              <img src={gptLogo} alt={'Logo'} className={'logo'}/>
              <span className={'brand'}>ChatGPT</span>
            </div>

            <div className={'logoBtn'}>
              <button className={'midBtn'}><img src={addBtn} alt={'new Chat'} className={'addBtn'}/>New Chat</button>

            </div>
          </div>


          <div className={'upperSideBottom'}>
            <button className={'query'}><img src={msgIcon} alt={'Query'} className={'addBtn'}/> what is Programing
            </button>
            <button className={'query'}><img src={msgIcon} alt={'Query'} className={'addBtn'}/> How to use ab Api
            </button>
          </div>

        </div>


        <div className={'lowerSide'}>
          <div className={'listItems'}><img src={home} alt={'Home'} className={'listItemsImg'}/>Home</div>
          <div className={'listItems'}><img src={saved} alt={'Saved'} className={'listItemsImg'}/>Saved</div>
          <div className={'listItems'}><img src={rocket} alt={'Upgrade'} className={'listItemsImg'}/>Upgrade to Pro
          </div>
        </div>
      </div>

      <div className={'main'}>
        <div className={'chats'}>

          <div className={'chat'}>
            <img className={'chatImg'} src={userIcon} alt={'chatGptLogo'}/>
            <p
              className={'txt'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nunc
              Pellentesque vel tristique nisi. Aenean ornare mauris non ex rutrum efficitur.


            </p>
          </div>

          <div className={'chat bot'}>
            <img className={'chatImg'} src={gptImgLogo} alt={'userLogo'}/>
            <p
              className={'txt'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nunc
              vestibulum, molestie ipsum nec, volutpat orci. Aliquam vitae ullamcorper erat, et gravida lectus. Integer
              est lorem, fermentum in quam eu, vulputate blandit lacus. Sed scelerisque tristique nibh, eget convallis
              est dapibus vel. Nulla condimentum, massa nec maximus posuere, metus diam condimentum nibh, fermentum
              blandit mauris ligula at purus. Mauris tincidunt bibendum euismod. Nam nunc ante, suscipit et elit ut,
              cursus tincidunt mi. Pellentesque vel tristique nisi. Aenean ornare mauris non ex rutrum efficitur.

              Ut justo urna, facilisis id enim vel, convallis porta libero. Cras aliquam nisi eget mauris porta semper.
              Pellentesque fringilla hendrerit quam, et iaculis ante tempor nec. Fusce commodo, lacus sit amet laoreet
              pretium, urna dolor venenatis nisi, et fermentum risus magna id justo. In id justo vitae lacus laoreet
              porttitor. Ut sit amet malesuada augue. Quisque tincidunt justo nibh, vel hendrerit diam pretium ac.
              Integer dapibus congue finibus. Pellentesque in nibh eu elit porttitor accumsan in sit amet dui. Aenean et
              mattis sem, at rutrum est. Donec lacinia, ligula facilisis gravida pharetra, lacus neque tempus diam, nec
              iaculis ipsum turpis eu libero.

            </p>
          </div>

        </div>

        <div className={'chatFooter'}>
          <div className={'inp'}>
            <input type={'text'} name={''} id={''} placeholder={'Send a message...'}/>
            <button className={'send'}>
              <img src={sendBtn} alt={'send'}/>
            </button>
          </div>
          <p>ChatGPT may produce incorrect result</p>
        </div>
      </div>

    </div>
  );
}

export default App;
