export default class Tab{
	constructor(id){
		this.oBox = document.getElementById(id);
		this.oBtn = this.oBox.getElementsByTagName("button");
		this.oDiv = this.oBox.getElementsByTagName("div");
		this.init();
		//this.autonext();
		this.isnow = 0;
		this.st = setInterval(this.next.bind(this),1000);

	}
	init(){
		for(let i=0; i<this.oBtn.length;i++){
			this.oBtn[i].onclick =function(){
				//alert(i);
				this.hide();
				this.show(i);
			}.bind(this);
		};
		this.oBox.onmouseover =function(){
			clearInterval(this.st);
		}.bind(this);

		this.oBox.onmouseout =function(){
			this.st = setInterval(this.next.bind(this),1000);
		}.bind(this);
	}
	hide(){
		for(let i=0; i<this.oBtn.length;i++){
			this.oDiv[i].style.display="none";
			this.oBtn[i].className =""
		}
	}
	show(i){
		this.oDiv[i].style.display="block";
		this.oBtn[i].className ="active"
	}
	next(){		
		if (this.isnow>= this.oBtn.length)this.isnow=0;		
		this.hide();
		this.show(this.isnow);
		this.isnow++;
		console.log(this.isnow);
	}
}