const sequelize = require('./database/connection');

module.exports = async () => {
    const Member = require('./models/Member');
    const Payment = require('./models/Payment');
    const PaymentDetail = require('./models/PaymentDetail');
    const Validation = require('./models/Validation');

    Member.hasMany(Payment, {as: 'Payment', foreignKey: 'memberId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
    Payment.belongsTo(Member, {as:'Member', foreignKey: 'memberId'});
    Member.hasMany(Validation, {as:'Validation', foreignKey:'memberId', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Validation.belongsTo(Member, {as: 'Member', foreignKey:'memberId'});
    Payment.hasOne(PaymentDetail, {as:'PaymentDetail', foreignKey:'idPayment', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
    PaymentDetail.belongsTo(Payment, {as:'Payment', foreignKey: 'idPayment'});

    sequelize.sync({alter: true}).catch((err)=>{
        console.log(err);
    })
}