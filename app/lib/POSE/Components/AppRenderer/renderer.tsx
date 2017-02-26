import FacebookSdk from "../Presentation/SocialMedia/Facebook/FacebookSdk";
import BootstrapContainerLayout from "../../../HTML/Components/BootstrapContainerLayout";

export =  function(props) {
    return (
    <div>
        <FacebookSdk appId="764673526884567"></FacebookSdk>

        <BootstrapContainerLayout>
            {props.children}
        </BootstrapContainerLayout>
    </div>
);
}
