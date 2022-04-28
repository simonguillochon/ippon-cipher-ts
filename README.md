# The Alphabet Cipher - Lewis Carroll (1868)

🧷 This kata is fully inspired of [this Github repository](https://github.com/gigasquid/wonderland-clojure-katas/tree/master/alphabet-cipher)

Lewis Carroll publiait en 1868 The Alphabet Cipher décrivant une mécanique de chiffrement par substitution connue comme [le chiffre de Vigenère](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Cette mécanique implique l'utilisation d'un outil indispensable appelée la table de Vigenère :

```
      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z     
                                                             
 A    a b c d e f g h i j k l m n o p q r s t u v w x y z    A
 B    b c d e f g h i j k l m n o p q r s t u v w x y z a    B
 C    c d e f g h i j k l m n o p q r s t u v w x y z a b    C
 D    d e f g h i j k l m n o p q r s t u v w x y z a b c    D
 E    e f g h i j k l m n o p q r s t u v w x y z a b c d    E
 F    f g h i j k l m n o p q r s t u v w x y z a b c d e    F
 G    g h i j k l m n o p q r s t u v w x y z a b c d e f    G
 H    h i j k l m n o p q r s t u v w x y z a b c d e f g    H
 I    i j k l m n o p q r s t u v w x y z a b c d e f g h    I
 J    j k l m n o p q r s t u v w x y z a b c d e f g h i    J
 K    k l m n o p q r s t u v w x y z a b c d e f g h i j    K
 L    l m n o p q r s t u v w x y z a b c d e f g h i j k    L
 M    m n o p q r s t u v w x y z a b c d e f g h i j k l    M
 N    n o p q r s t u v w x y z a b c d e f g h i j k l m    N
 O    o p q r s t u v w x y z a b c d e f g h i j k l m n    O
 P    p q r s t u v w x y z a b c d e f g h i j k l m n o    P
 Q    q r s t u v w x y z a b c d e f g h i j k l m n o p    Q
 R    r s t u v w x y z a b c d e f g h i j k l m n o p q    R
 S    s t u v w x y z a b c d e f g h i j k l m n o p q r    S
 T    t u v w x y z a b c d e f g h i j k l m n o p q r s    T
 U    u v w x y z a b c d e f g h i j k l m n o p q r s t    U
 V    v w x y z a b c d e f g h i j k l m n o p q r s t u    V
 W    w x y z a b c d e f g h i j k l m n o p q r s t u v    W
 X    x y z a b c d e f g h i j k l m n o p q r s t u v w    X
 Y    y z a b c d e f g h i j k l m n o p q r s t u v w x    Y
 Z    z a b c d e f g h i j k l m n o p q r s t u v w x y    Z
                                                             
      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z     
```

Deux protagonistes décident de se servir de cette table ingénieuse pour communiquer sans risque d'être repéré. L'un souhaite dire à l'autre la chose suivante:
```
I have the ten bitcoins you asked me
```

Pour l'encryptage et le décryptage d'un message, il faut une clé qu'on concatènera autant de fois que nécessaire pour avoir le même nombre de caractères que le message initial. A chaque lettre de notre clé, il suffit de regarder à la colonne correspondant dans la table de Vigenère puis descendre à la ligne correspondant à la lettre de notre message pour trouver la lettre de notre message encrypté.  

Nos deux protagonistes ayant choisi le mot `satoshi`, cela donne la chose suivante : 
```
s a t o s h i s a t o s h i s a t o s h i s a t o s h i s
i h a v e t h e t e n b i t c o i n s y o u a s k e d m e
a h t j w a p . . . . . . . . . . . . . . . . . . . . . .
```
Nos deux protagonistes échangeant beaucoup avec ce système. Par conséquent, ils souhaitent faciliter le décryptage d'un message donné avec une clé donnée. La ligne de commande qu'ils prévoient d'entrer ressemble à ceci :
```bash
npx ts-node decrypt-cipher.ts --key=<KEY_VALUE> --message=<MESSAGE_VALUE>
```

Réaliser un programme en TypeScript pour décrypter la phrase suivante avec la clé `ippon` utilisée par nos protagonistes.
```
. . .
```
