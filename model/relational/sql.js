exports.selectNameUser = function (name) {
    return 'SELECT u.id, u.idAccount, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email FROM auth.User u LEFT OUTER JOIN msg.Email e ON e.idUser=u.id WHERE name = \'' + name + '\';';
};


exports.selectUser = function (idUser) {
  return  'SELECT `user`.id AS idUser, agent.id AS idAgent, merchant.id AS idMerchant,consumer.id AS idConsumer,customer.id AS idCustomer,donor.id AS idDonor '+
          'From auth.`User` `user` '+
          'LEFT OUTER JOIN `user`.Agent agent ON `user`.id = agent.idUser '+
          'LEFT OUTER JOIN `user`.Merchant merchant ON `user`.id = merchant.idUser '+
          'LEFT OUTER JOIN `user`.Consumer consumer ON `user`.id = consumer.idUser '+
          'LEFT OUTER JOIN `user`.Customer customer ON `user`.id = customer.idUser '+
          'LEFT OUTER JOIN `user`.Donor donor ON `user`.id = donor.idUser '+
          'WHERE user.id = '+idUser+';'
};

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
