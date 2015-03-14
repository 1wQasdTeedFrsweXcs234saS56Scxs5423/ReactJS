/** @jsx React.DOM */
  React.createClass({
    getInitialState:function(){
      return {
        input:'/** @jsx React.DOM */',
        output:'',
        err:''
      }
    },
    update:function(e){
      var code = e.target.value;
      try {
        this.setState({
          output:JSXTransformer.transform(code).code,
          err:''
        })
      }
      catch(err){
        this.setState({
          err:err.message
        })
      }

    },
    render:function(){
      return (
          React.createElement("div", null, 
            React.createElement("div", {className: "row"}, 
              React.createElement("p", {className: "alert alert-danger"}, " ", this.state.err)
            ), 
            React.createElement("div", {className: "row"}, 
              React.createElement("textarea", {className: "col-sm-6 input-lg", defaultValue: this.state.input, onChange: this.update}), 
              React.createElement("pre", {className: "col-sm-6 input-lg"}, this.state.output), 
			  React.createElement("label", null, this.state.output)
            )

          )
        )
    }
  });