function Prix(tabproduits,d,livexpress)
{
    total = 0
    for( let prod in tabproduits)
    {
        let nbprod = prod._nbarticle ; 
        let prix = prod._prix ; 
        if (nbprod>10)
        {total += 10*prix + (nbprod-10)*prix*0.9} 
        else
        {total += nbprod*prix}
    }

    if(d>20)
    {total += 5 + 0.07*d}

    if (livexpress=="oui")
    {total += 8}
}