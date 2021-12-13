const vault= {
    password: 123123,
    number: null,
    play: function () {
      this.number = this.logPW()
      this.render()
    },
    render: function () {
      if (this.number !== this.password) {
        alert(`WRONG PASSWORD`);
        this.number = this.logPW();
        this.render();
      } else {
        alert(`VAULT IS NOW OPEN`);
      }
    },
    
    logPW: function () {
      let newLogPW = parseInt(prompt(`ENTER THE PASSWORD`));
      return newLogPW
    },
  };
  vault.play()