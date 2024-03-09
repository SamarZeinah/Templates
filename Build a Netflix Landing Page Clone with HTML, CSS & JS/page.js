//contain 3 icons
const tabItems=document.querySelectorAll('.tab-item');
//contain 3 content
const tabContentItems=document.querySelectorAll('.tab-content-item');

//select tap content item
function selectItem(e){
    removeborder();
    removeshow();
    //add border to current tap
    this.classList.add('tab-border');
    //grab contentitem from Dom
    const tabContentItems=document.querySelector(`#${this.id}-content`);
    // add show class
    tabContentItems.classList.add('show');

}
function removeborder(){
tabItems.forEach(item=>item.classList.remove('tab-border'))
}
function removeshow(){
    tabContentItems.forEach(item=>item.classList.remove('show'))
    }
//listen fot tap click
tabItems.forEach(item=>item.addEventListener('click',selectItem));