window.addEventListener('load', ()=> {
    const list = new List();
    const form = new Form();
    const clock = new Clock();

    form.init(list);
   
    clock.getTime();
    setInterval(clock.getTime.bind(clock), 1000);

});

