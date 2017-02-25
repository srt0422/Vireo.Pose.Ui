import {LoginManager} from "react-native-fbsdk";

export function renderer(){

  LoginManager.logInWithPublishPermissions(['publish_actions']).then((result) =>{

      if (result.isCancelled) {
        alert('Login cancelled');
      }
      else {
        alert('Login success with permissions: '
          +result.grantedPermissions.toString());

          alert("Info: " + result);
      }

    },
    (error)=> {
      alert('Login fail with error: ' + error);
    }
  );

  return null;
}

export default renderer;
