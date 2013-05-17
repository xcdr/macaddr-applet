/**
 * This software is released under the MIT License.
 *
 * @author: Adam Kubica <caffecoder@kaizen-step.com>
 */
function show_macaddresses(){
    if ( typeof(document.macaddress_applet.isActive) == "undefined" )
    {
        document.write( "Unable to detect MAC addresses." );
    }
    else
    {
        var interfaces = eval( String( document.macaddress_applet.getInterfacesJSON() ) );
        var interface_string = "";

        for( var idx = 0; idx < interfaces.length; idx++ )
        {
            var tmp = interfaces[idx].split(";");
            interface_string += "NIC " + (idx+1) + ": " + tmp[1] + " (" + tmp[0] + ")<br />\n ";
        }

        if ( interface_string.length > 0 )
        {
            document.write( "Detected MAC addresses:<br />" );
            document.write( interface_string );
        }
    }
}
