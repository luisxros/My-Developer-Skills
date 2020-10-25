// IPO - Input Process Out

// Constants and variables (State)
let skills;

// Cached ELement References
const $button = $('button');
const $ul = $('ul');
const $input = $('input');
// Event Listeners
$button.on('click', handleAddSkill);
$ul.on('click', handleDelete);

// functions

init();

function init() { 
    skills = [];
    render();
}

function handleAddSkill() {
    // Store value from the input tag insde a local variable
    const skill = $input.val();
    // Check to make sure we have skill data
    if(skill) {
        // Create UI for skill
        const $skill = $(`<li><span>X</span>${skill}</li>`)
        // Push the skill UI into the skills list
        skills.push($skill);
        // Clear the input tag's value
        $input.val('');
        // call render()
        render()
    }   else return;

}

function handleDelete() {
    
    $('main ul').on('click', 'span',function(){
        $(this).closest('li').fadeOut(2000,function(){
            $(this).remove();
        });
    });
    
}

function render() {
// Take the list of skills in the  skills array and add them to the UL tag
if(!skills.length) $ul.css('margin-bottom', '30px')
else $ul.css('margin-bottom', '0px');
$ul.html(skills);
}