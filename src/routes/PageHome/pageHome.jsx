
import SearchBar from "../../components/searchBar/Searchbar";
import "./pageHome.scss";

const PageHome= () => {
    return (
       <div className="homePage">
     <div className="textContainer">
<div className="wrapper">
<h1 className="title">  Find real estate & get your dream place  </h1>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
<SearchBar />
</div>
     </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="bg" />
            </div>
       </div>
    )
}
export default PageHome;