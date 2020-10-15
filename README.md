# monika-swidzinska-value-blue

EmberJs, GoJs, Summernote, jQuery was totally new for me. I had one week to learn it and build the assignment. To broaden my knowledge I was using GoJs and EmberJs documentations, GoJs forum and youtube tutorials.

I added extra elements in GoJS:

- functionality for links which couses avoiding nodes (otherwise links are going through a node,
- functionality for links which makes break points round,
- undo and redo functionality (ctrl+z and ctrl+y),
- link labels ( but it was logic step to build functionality to resize links' font),
- diagram's instructions.

## Steps I made with GoJS:

- I included the GoJS library by installing "npm i gojs" in my terminal.
- Then I created an empty diagram with width and height.
- The next step was to create nodeDataArray (with key, color and localisation) and LinkDataArray (with: linking from and to, color and text).
- I added 5 nodes (with color and shape) and also with a different text for every of node.
- Between every node I put one link with a label on it.
- Then by using linking tool I made functionality which allows to draw a new link (with a "new link" label).
- I added a functionality which allows to relink links to another modules.
- I added a functionality which allows to change the link shape.
- I added a functionality which allows links to avoid nodes and make break points round.
- I build undo and redo functionality (ctrl+z and ctrl+y) to be able to go back and forward if we will change the diagram.
- I added the context menu (showig by right click on modules or links). I can change the font size of module (2x bigger) and link(2xsmaller). I created two functions (one for nodes, one for links wich are seting new font size after a click in a button in the context menu. To undo this I can use functionality from point 11.
  I stuck here for the first time becasue I forgot to bind the font ( new go.Binding("font", "font") ). But after a while of struggling and googling around I finally discovered my mistake.
- I created icons Saved and Saving (font awesome classes) above the diagram. When I make a change, icon Saved is changing for Saving for 5 seconds and after this time the icon Saved is visible again. I built this by using a dom manipulation and "isTransactionFinished" GoJS functionality. The Saving icon is on the beginning as well becasue the diagram is loading for the first time and it is considered as a change.
- In the end I added diagram's instruction to make the application more understandable for every user.

## Steps I made with EmberJs:

- You sent me a pre installed project, but I installed EmberJs and created project from the beginning by myself.
- I wanted to keep only one page so I added a routing: this.route('diagram', { path: '/' });
- I added components (diagram, summernote, footer, instructins) and styled them in app.css
- I put all components together in application.hbs
- I installed summernote (jQuery and bootstrap needed for summer note as well) by adding code in index.html (links and scripts)
- I added a text to the editor

This is all what I did during a week between my regular work. To do everything I need to spend a bit more time on learning EmberJs. I don't like the <script></script> solution poposed by GoJs documentation. I know I can do it better in EmberJs. I also need to learn jQuery to be able to manipulate data in Summernote. I must admit that first time in my life I am sending project I didn't finished, but I just not able to learn everything (EmberJs, GoJs, Summernote and jQuery) in one week and build a project.

Screenshots and video:

<div>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1602766501/ValueBlue/project.png" />
</div>

<div>
<a href="https://youtu.be/GI_m390kFXA">Link to the video</a>
</div>