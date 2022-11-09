({
    navigate : function(component, event, helper) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": 'https://mintcrm.force.com/MintCRM/s/create-a-case'
        });
        urlEvent.fire();
    }
})