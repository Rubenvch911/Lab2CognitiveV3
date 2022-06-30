const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM contactos', (err, contactos)=>{
            if (err){
                res.json(err);
            }
            console.log(contactos);
            res.render('contactos',{
                data: contactos
            });

        });
    })
};

controller.save =(req,res)=>{
    const data = req.body
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO contactos set ?', [data],(err,contactos)=>{
            console.log(contactos);
            res.redirect('/');
        })
    })

}

module.exports = controller;