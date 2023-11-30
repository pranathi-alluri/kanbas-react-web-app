import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
const API_BASE = process.env.REACT_APP_API_BASE;

function Assignment5() {
    const URL = `${API_BASE}/a5/welcome`
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={URL}
                   className="list-group-item">
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment5;