db.produtos.find({ vendidos: { $lt: 100, $gt: 50 }}, { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 });



/* db.produtos.find({ $or: [{ vendidos: { $lt: 100 }}, { vendidos: { $gt: 50 }}]}, { _id: 0, nome: 1 }).sort({ vendidos: 1 }); */