module.exports = (app, db, logger) => {
  app.post('/blogs', (req, res)=>{
    logger.log({
      level: 'info',
      message: res.body
    });
    res.send('hi post');
  });
  app.get('/blogs', (req, res)=>{
    logger.log({
      level: 'info',
      message: res.body
    });
    res.send('hi get all');
  });
  app.get('/blogs/:id', (req, res)=>{
    let id = req.params.id;
      logger.log({
        level: 'info',
        message: res.body + " id was :" + id
      });
    res.send('hi get ' + id);
  });
  app.put('/blogs', (req, res)=>{
    logger.log({
      level: 'info',
      message: res.body
    });
    res.send('hi put');
  });
  app.delete('/blogs', (req, res)=>{
    logger.log({
      level: 'info',
      message: res.body
    });
    res.send('hi delete');
  });
}
