sap.ui.define([
	"sap/ui/core/Control", 'sap/m/Button'
], function (Control,Button) {
	"use strict";
	return Control.extend("better.ui5.control.SuperControl", {
		metadata : {
		},
		init : function () {
		},
		renderer : function (oRM, oControl) {

            return(
                <div>
                    <p> hello world </p>
                    <Button text='button' />
                </div>
            )
            //var button = new Button({
                //text:'button'
            //});
            //oRM.write('<p> hello world </p>');
            //oRM.renderControl(button);
		}
	});
});
