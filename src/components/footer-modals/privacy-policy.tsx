import type {ReactElement} from "react";

export default function PrivacyPolicy(): ReactElement {
    return (
        <div>
            In order to function, the only information the site collects is a user&apos;s email.<br/><br/>
            The information is gathered at the time of account creation, and solely used for communication and login purposes.<br/><br/>
            User data is not shared with any third-party services, and the information that is gathered has been encrypted for protection.<br/><br/>
            The gathered data will be retained until a user requests to delete their account, upon which all stored data will be purged.<br/><br/>
            If there are any additional concerns about the data gathered on users, requests can be made to staff in order to gain access, correct, or delete unnecessary stored information.<br/><br/>
            While the website is deisgned to be family friendly, it should be noted that there are certain subjects which may be too violent for children.<br/><br/>
            Any changes made to the privacy policy will announced as soon as possible.
        </div>
    );
}
