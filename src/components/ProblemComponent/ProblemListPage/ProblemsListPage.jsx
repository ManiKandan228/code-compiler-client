import './ProblemsListPage.css'
import Problems from '../Problems/problems';
import Navbar from './Navbar';

const ProblemsListPage = () => {
    return (
        <div id="problemsListPage">
            <Navbar />
            <Problems />
        </div>
    )
}


export default ProblemsListPage;