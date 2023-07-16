(()=>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();
    const clickHandler = (e) => {
        //リンク要素を無効化するために
        e.preventDefault();

        const $this = e.target;
        const targetVal = $this.dataset.nav;

        let index = 0;
        while(index < $nav.length){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        $tab.querySelectorAll('[data-content="'+targetVal+'"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    }

    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click',(e)=>{clickHandler(e)});
        index++;
    }
})();