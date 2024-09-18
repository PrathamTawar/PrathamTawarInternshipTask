const journeyBtn = document.querySelector('.journeyBtn');
const journeySection = document.querySelector('.journeySection');
const journeyContent = document.querySelector('.journeyContent');
const journeyNotifs = document.querySelector('.journeyNotifs');
const gridSection = document.querySelector('.gridSection');
let data = {
    "_id": {
      "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
      "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
  }
let task = data.tasks[0];
function handleJourney()
{
    journeySection.classList.toggle('leftCollapse');
    journeyBtn.classList.toggle('right-arrow');
    journeyContent.classList.toggle('hidden');
    journeyNotifs.classList.toggle('hidden');
}
journeyBtn.addEventListener('click', () => {handleJourney()})



function filterCards(eachAsset)
{
    if(eachAsset.asset_content_type === "video")
    {
        let html =`<div id="card1" class="card cardShadow">
            <div class="cardHeading">
                <h4>${eachAsset.asset_title}</h4>
                <div class="arrowIcon">
                    <img src="./assets/angle-down-solid.svg" alt="">
                </div>
            </div>

            <div class="collapsable">
                <div class="description">
                    <p><span class="firstWord">Description:</span>${eachAsset.asset_description}</p>
                </div>
    
                <iframe src=${eachAsset.asset_content}></iframe>
            </div>
        </div>`

        return html
    }

    if(eachAsset.asset_content_type === "threadbuilder")
    {
        let html = `<div id="card2" class="card cardShadow">
            <div class="cardHeading">
                <h4>${eachAsset.asset_title}</h4>
                <div class="arrowIcon">
                    <img src="./assets/angle-down-solid.svg" alt="">
                </div>
            </div>

            <div class="collapsable">
                <div class="description">
                    <p><span class="firstWord">Description:</span>${eachAsset.asset_description}</p>
                </div>
    
                
                <div class="threads">
                    <div class="threadHeading">
                        <img style="cursor: pointer;" src="./assets/uparrow.png" alt="">
                        <h3>Thread A</h3>
                    </div>

                    <div class="threadContent">
                        <form class="threadForm1" action="">
                            <div class="subThread form1inpt">
                                <p>Sub thread 1</p>
                                <input type="text" placeholder="Enter Text here">
                            </div>
    
                            <div class="subInterpretation form1inpt">
                                <p>Sub interpretation 1</p>
                                <input type="text" placeholder="Enter Text here">
                            </div>
                        </form>
    
                        <div class="threadIcons">
                            <div class="iconsThreadIcons">
                                <img src="./assets/threadicons.png" alt="">
                            </div>
    
                            <div class="threadIconBtn">
                                <button>Select Categ <span><img src="./assets/angle-down-solid.svg" alt=""></span></button>
                                <button>Select Proces <span><img src="./assets/angle-down-solid.svg" alt=""></span></button>
                            </div>
                        </div>

                        <div class="submitbtn">
                            <button><span>+</span> Sub-thread</button>
                        </div>

                        <form class="threadForm2" action="">
                            <div class="summary">
                                <p>Summary for Thread A</p>
                                <input type="text" placeholder="Enter Text here">
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>`

        return html
    }

    if(eachAsset.asset_content_type === "article" && eachAsset.asset_type === "input_asset")
    {
        let html = `<div id="card3" class="card cardShadow">
            <div class="cardHeading">
                <h4>${eachAsset.asset_title}</h4>
                <div class="arrowIcon">
                    <img src="./assets/angle-down-solid.svg" alt="">
                </div>
            </div>

            <div class="collapsable">
                <div class="description">
                    <p><span class="firstWord">Description:</span>${eachAsset.asset_description}</p>
                </div>
    
                <div class="threadContent">
                    
                    <div class="pointerTitle">
                        <p>Title</p>
                        <input type="text">
                    </div>

                    <div class="pointerContent">
                        <p>Content</p>

                        <div class="contentNav">
                            <ul>
                                <li>File</li>
                                <li>Edit</li>
                                <li>View</li>
                                <li>Insert</li>
                                <li>Format</li>
                                <li>Tools</li>
                                <li>Table</li>
                                <li>Help</li>
                            </ul>

                            <div class="contentNavIcons">

                                <img src="./assets/arrow-curve-left-right.png" alt="">
                                <img src="./assets/arrow-curve-left-down.png" alt="">
                                <img src="./assets/arrow-expand-02.png" alt="">

                                <p>Paragraph</p>
                                <p>...</p>
                            </div> 
                        </div>
                        
                        <input type="text">
                    </div>
                </div>
             
            </div>
        </div>`

        return html;
    }
    else
    {
        return 'workinprogress'
    }
}



function showCards()
{
    gridCards= task.assets.map((eachAsset) => {
        return filterCards(eachAsset)
    })

    gridCards.forEach((eachCard) => {gridSection.innerHTML += eachCard});
}

showCards();






const arrowIcon = document.querySelectorAll('.arrowIcon');
const card = document.querySelectorAll('.card');
const collapsable = document.querySelectorAll('.collapsable');
function handleCards(arrow, parentId)
{
    arrow.classList.toggle('upArrow');

    if(parentId === 'card1')
    {
        card[0].classList.toggle('cardShadow');
        collapsable[0].classList.toggle('collapse');
    }
    if(parentId === 'card2')
    {
        card[1].classList.toggle('cardShadow');
        collapsable[1].classList.toggle('collapse');
    }
    if(parentId === 'card3')
    {
        card[2].classList.toggle('cardShadow');
        collapsable[2].classList.toggle('collapse');
    }
    if(parentId === 'card4')
    {
        card[3].classList.toggle('cardShadow');
        collapsable[3].classList.toggle('collapse');
    }
    
}
arrowIcon.forEach((arrow) => {
    let parentId = arrow.parentElement.parentElement.id;
    arrow.addEventListener('click', () => {handleCards(arrow, parentId)})
});
