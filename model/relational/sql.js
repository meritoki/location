exports.selectLocation = function(user) {
  var sql = "";
  if(user.idConsumer != null) {
    sql += this.selectConsumerLocation(user.idConsumer);
  } else if(user.idDonor != null) {
    sql += this.selectDonorLocation(user.idDonor);
  } else if(user.idAgent != null) {
    sql += this.selectAgentLocation(user.idAgent);
  }
  return sql;
}

exports.selectConsumerLocation = function(idConsumer) {
  return 'SELECT consumerLocation.idConsumer, location.id AS idLocation, location.addressOne, location.addressTwo, location.addressThree, location.city, location.zipCode '+
         'FROM location.ConsumerLocation consumerLocation '+
         'LEFT OUTER JOIN location.Location location ON location.id = consumerLocation.idLocation '+
         'WHERE consumerLocation.idConsumer ='+idConsumer+';';
}

exports.selectDonorLocation = function(idDonor) {
  return 'SELECT donorLocation.idDonor, location.id AS idLocation, location.addressOne, location.addressTwo, location.addressThree, location.city, location.zipCode '+
         'FROM location.DonorLocation donorLocation '+
         'LEFT OUTER JOIN location.Location location ON location.id = donorLocation.idLocation '+
         'WHERE donorLocation.idDonor ='+idDonor+';';
}

exports.selectAgentLocation = function(idAgent) {
  return 'SELECT agentLocation.idAgent, location.id AS idLocation, location.addressOne, location.addressTwo, location.addressThree, location.city, location.zipCode '+
         'FROM location.AgentLocation agentLocation '+
         'LEFT OUTER JOIN location.Location location ON location.id = agentLocation.idLocation '+
         'WHERE agentLocation.idAgent ='+idAgent+';';
}

exports.selectMerchantLocation = function(idMerchant) {
  return 'SELECT merchantLocation.idMerchant, location.id AS idLocation, location.addressOne, location.addressTwo, location.addressThree, location.city, location.zipCode '+
         'FROM location.MerchantLocation merchantLocation '+
         'LEFT OUTER JOIN location.Location location ON location.id = merchantLocation.idLocation '+
         'WHERE merchantLocation.idMerchant ='+idMerchant+';';
}

exports.selectCustomerLocation = function(idCustomer) {
  return 'SELECT customerLocation.idCustomer, location.id AS idLocation, location.addressOne, location.addressTwo, location.addressThree, location.city, location.zipCode '+
         'FROM location.CustomerLocation customerLocation '+
         'LEFT OUTER JOIN location.Location location ON location.id = customerLocation.idLocation '+
         'WHERE customerLocation.idCustomer ='+idCustomer+';';
}

exports.insertLocation = function(location) {
  var sql = "INSERT INTO location.Location (addressOne,city,zipCode) VALUES (\""+location.addressOne+"\",\""+location.city+"\", \""+location.zipCode+"\");"+
         "SET @idLocation = LAST_INSERT_ID(); "
         if(location.idDonor != undefined) {
           sql+="INSERT INTO location.DonorLocation(idDonor,idLocation) VALUES ("+location.idDonor+",@idLocation);"
        } else if (location.idAgent != undefined) {
          sql+="INSERT INTO location.AgentLocation(idAgent,idLocation) VALUES ("+location.idAgent+",@idLocation);"
        } else if (location.idConsumer != undefined) {
          sql+="INSERT INTO location.ConsumerLocation(idConsumer,idLocation) VALUES ("+location.idConsumer+",@idLocation);"
        }
         sql+="COMMIT;"

         return sql;
}
