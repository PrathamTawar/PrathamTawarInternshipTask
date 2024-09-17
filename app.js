const journeyBtn = document.querySelector('.journeyBtn');
const journeySection = document.querySelector('.journeySection');
const journeyContent = document.querySelector('.journeyContent');
const journeyNotifs = document.querySelector('.journeyNotifs');

function handleJourney()
{
    journeySection.classList.toggle('leftCollapse');
    journeyBtn.classList.toggle('right-arrow');
    journeyContent.classList.toggle('hidden');
    journeyNotifs.classList.toggle('hidden');
}

journeyBtn.addEventListener('click', () => {
    handleJourney()
})