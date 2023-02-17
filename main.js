const fs = require("fs");
const path = require("path");

var cryptoHash = require("crypto-hashing");

// console.log(cryptoHash('hash256', new Buffer('Hello there!')).toString('hex'))

fs.readFile(path.join(__dirname, "./data.txt"), (err, res) => {
  const arr = res
    .toString()
    .split("\n")
    .map((item) => item.split(","));

  const metadata = arr.map((item) => {
    const metadata = {
      image: `https://raw.githubusercontent.com/ChatFinance/chatfi/main/images/${item[0]}.png`,
      name: `Chat-GPT Finance #${item[0]}`,
      tokenId: item[0],
      external_url: "https://twitter.com/ChatFi_AI",
      attributes: [
        {
          trait_type: "glasses",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[2]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "hat",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[3]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "facemask",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[4]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "mouth",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[5]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "earpros",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[6]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "hair",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[7]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "eyes",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[8]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "nose",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[9]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "eyebrow",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[10]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "beards",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[11]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "ears",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[12]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "body",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[13]))
              .toString("hex")
              .slice(0, 5),
        },
        {
          trait_type: "background",
          value:
            "0x" +
            cryptoHash("hash256", new Buffer(item[14]))
              .toString("hex")
              .slice(0, 5),
        },
      ],
    };
    return metadata;
  });

  // const resString = res.toString();
  // const resultJSON = resString.split(',').map(item => item.split('\t')).map(item => item.map(item => item.trim())).map(item => {
  //     if (!item[0] || !item[1] || !item[2]) {
  //         console.log('---提供的资源数值有误---');
  //         isError = true;
  //     }
  //     return {
  //         tokenId: item[0],
  //         userAddress: item[1],
  //         type: item[2],
  //     }
  // }).map(item => {
  //     const dataTime = new Date().getTime()
  //     const metadata = {
  //         // description: tokenType[item.type].desc,
  //         image: `https://raw.githubusercontent.com/W3T-Web3-Genius-Tools/sbt/main/src/metadata/images/${item.tokenId}.png`,
  //         name: `${tokenType[item.type].tag} #${item.tokenId}`,
  //         tokenId: item.tokenId,
  //         external_url: "https://github.com/W3T-Web3-Genius-Tools",
  //         attributes:
  //             [{trait_type: 'Type of Honor', value: tokenType[item.type].tag},
  //                 {trait_type: 'Award Address', value: item.userAddress},
  //                 {trait_type: 'Signature Date', "display_type": "date", value: dataTime},
  //                 {trait_type: 'Signatories', value: "0xf8D9d01c90B84dc99064968ED77b829Ab0A593f7"}]
  //     }
  //     return metadata
  // })

  // // 生成单文件-总文件
  //   fs.writeFileSync(path.join(__dirname, './metadata.json'), JSON.stringify(metadata, null, 2))
  //   fs.writeFileSync(path.join(__dirname, '../images-gen/src/data/data.json'), JSON.stringify(metadata, null, 2))
  // 生成多文件-单文件
  for (let i = 0; i < metadata.length; i++) {
    console.log(metadata[i]);
    fs.writeFileSync(
      path.join(__dirname, `./data/${metadata[i].tokenId}.json`),
      JSON.stringify(metadata[i], null, 2)
    );
  }

  // if (!isError) {
  //     console.log("解析成功");
  // }
});
