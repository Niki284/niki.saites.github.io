(() => {
    const app = {
        init() {
            // genereer query selectie
            console.log("1. Aplicatie inlaise");
            // Call the function cacheElement
            this.cacheElement();
            this.generateUi();
            this.subscribe();
        },
        cacheElement() {
            console.log("2. case Element");
            // Get the node or element via querySelector with certain selectors


            this.linupElement = document.querySelector(".linup");
            console.log(this.linupElement);


        },
        generateUi() {
            console.log("3. Generate User interface!");

            this.linupElement.innerHTML = linup
                .map((content) => {
                    return `
            
                <div class="content-fotos">
                    <div class="content" id="${content.id}"> 
                        <img src="${content.picture.small}">
                    </div>
                </div>    
           
            `;
                })
                .join("");

        },
    };

    // Call the init function (method) from the app object
    app.init();
})();