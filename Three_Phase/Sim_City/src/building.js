export default {
    'residence': () => {
        return {
            id:'residence',
            upgrade: 0,
            colour: 0x00ff00,
            style: Math.floor(2*Math.random()) + 1,
            height: 0.05,
            updated: true,
            update : function() {
                if(Math.random() < 0.001){
                    if(this.height < 3){
                        this.upgrade += 1; 
                        this.height += 1; //max height 4.55
                        this.updated = true;
                    }
                }
            }
        }
    },
    'industry': () => {
        return {
            id:'industry',
            colour: 0xffff00,
            upgrade: 0,
            style: Math.floor(2*Math.random()) + 1,
            height: 0.05,
            updated: true,
            update : function() {
                if(Math.random() < 0.001){
                    if(this.height < 3){
                        this.upgrade += 1; 
                        this.height += 1; //max height 4.55
                        this.updated = true;
                    }
                }
            }
        }
    },
    'commercial': () => {
        return {
            id:'commercial',
            colour: 0x0000ff,
            upgrade: 0,
            style: Math.floor(2*Math.random()) + 1,
            height: 0.05,
            updated: true,
            update : function() {
                if(Math.random() < 0.001){
                    if(this.height < 3){
                        this.upgrade += 1; 
                        this.height += 1; //max height 4.55
                        this.updated = true;
                    }
                }
            }
        }
    },
    'road': () => {
        return {
            id:'road',
            updated: true,
            style: undefined,
            update: function() {
                this.updated = false;
            }
        }
    }
}