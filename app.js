sap.ui.define(['sap/ui/model/json/JSONModel'], function(JSONModel) {
  
    var fragment = sap.ui.xmlfragment('better.ui5.app', {
    onButtonPress: function() {
      //model.setProperty('/text', 'changed text');
    }
  });

  fragment.placeAt('root');

});
