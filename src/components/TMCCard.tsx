import React, { useRef } from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { MdOutlineQuestionAnswer, MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiFilter2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AlertModal from "./AlertModal";
import { Switch } from "@headlessui/react";

type Item = {
  id: number;
  name: string;
  quote: string;
  category: string;
  author: string;
  url: string;
};

const TMCCard = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 0,
      name: "Item 0",
      quote: "“Welcome to the TMC 511 study hub! new”",
      author: "Rerel'Oluwa Tooki",
      category: "Quote",
      url: "https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/",
    },
    {
      id: 1,
      name: "Item 1",
      quote: "Understanding Financial Prosperity",
      author: "By: Bishop David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/understanding-financial-prosperity",
    },
    {
      id: 2,
      name: "Item 2",
      quote: "The Hidden Covenants of Blessings",
      author: "By: Bishop David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/the-hidden-covenants-of-blessings",
    },
    {
      id: 3,
      name: "Item 3",
      quote: "Amongst the blessings of redemption is Riches.",
      author: "Rev 5:12 / 2 Cor 8:9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rev.5.12",
    },
    {
      id: 4,
      name: "Item 4",
      quote: "God takes pleasure in the prosperity of his servant.",
      author: "Psalm 35:27",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.35.27",
    },
    {
      id: 5,
      name: "Item 5",
      quote:
        "The rich will forever rule over the poor, and the borrower remains a servant to the lender.",
      author: "Prov 22:7 / Matt 6:24 / Psalm 110:1-3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.22.7",
    },
    {
      id: 6,
      name: "Item 6",
      quote: "We are redeemed to be a blessing to our world and not a burden.",
      author: "Gen 22:16-18 / Gal 3:29",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.22.16",
    },
    {
      id: 7,
      name: "Item 7",
      quote: "Money is not evil but the love of money.",
      author: "1 Tim 16:8",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1ti.16.8",
    },
    {
      id: 8,
      name: "Item 8",
      quote: "Prosperity is the heritage of every child of God.",
      author: "3 John 1:2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/3jn.1.2",
    },
    {
      id: 9,
      name: "Item 9",
      quote: "The last days are the days of God’s jewels on the earth.",
      author: "Mal 3:17-18 / Hag 2:8-9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mal.3.17",
    },
    {
      id: 10,
      name: "Item 10",
      quote:
        "We are empowered for wealth on the platform of Covenant Practice.",
      author: "Deut 8:18",
      category: "Bible",
      url: "https://www.bible.com/bible/1/deu.8.18",
    },
    {
      id: 11,
      name: "Item 11",
      quote:
        "A covenant is a deal enacted by God based on well-defined terms and sealed with an oath.",
      author: "Heb 6:13-18",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.6.13",
    },
    {
      id: 12,
      name: "Item 12",
      quote:
        "The anchor law for the prosperity covenant in the kingdom is the law of seedtime and harvest.",
      author: "Gen 8:22",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.8.22",
    },
    {
      id: 13,
      name: "Item 13",
      quote: "The law of sowing and reaping.",
      author: "Mal 3:1-10 / Matt 23:23 / Phil 4:15-19 / 2 Cor 9:6-8",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mal.3.1",
    },
    {
      id: 14,
      name: "Item 14",
      quote: "Give, and it will be given to you.",
      author: "Luke 6:38",
      category: "Bible",
      url: "https://www.bible.com/bible/1/luk.6.38",
    },
    {
      id: 15,
      name: "Item 15",
      quote: "God said, Let us make man in our image, after our likeness.",
      author: "Gen 1:26",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.1.26",
    },
    {
      id: 16,
      name: "Item 16",
      quote: "UNDERSTANDING WHY GOD BLESSES - To promote the kingdom.",
      author: "Zech 1:17",
      category: "Bible",
      url: "https://www.bible.com/bible/1/zec.1.17",
    },
    {
      id: 17,
      name: "Item 17",
      quote: "UNDERSTANDING WHY GOD BLESSES - To establish His covenant.",
      author: "Deut 8:18 / Gal 3:13-14",
      category: "Bible",
      url: "https://www.bible.com/bible/1/deu.8.18",
    },
    {
      id: 18,
      name: "Item 18",
      quote: "UNDERSTANDING WHY GOD BLESSES - To enjoy abundant life.",
      author: "2 Tim 6:17-19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2ti.6.17",
    },
    {
      id: 19,
      name: "Item 19",
      quote: "UNDERSTANDING WHY GOD BLESSES - To rescue us from shame.",
      author: "Joel 2:21-27 / 2 Pet 1:23",
      category: "Bible",
      url: "https://www.bible.com/bible/1/joe.2.21",
    },
    {
      id: 20,
      name: "Item 20",
      quote: "UNDERSTANDING WHY GOD BLESSES - To be a blessing to man.",
      author: "Gen 12:1-3 / 2 Cor 8:6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.12.1",
    },
    {
      id: 21,
      name: "Item 21",
      quote: "BEWARE OF ENEMIES OF PROSPERITY - Sharp practices.",
      author: "Prov 28:20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.28.20",
    },
    {
      id: 22,
      name: "Item 22",
      quote: "BEWARE OF ENEMIES OF PROSPERITY - Stealing.",
      author: "Zech 5:1-4 / John 7:21-25",
      category: "Bible",
      url: "https://www.bible.com/bible/1/zec.5.1",
    },
    {
      id: 23,
      name: "Item 23",
      quote: "BEWARE OF ENEMIES OF PROSPERITY - Murmuring.",
      author: "1 Cor 10:20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1co.10.20",
    },
    {
      id: 24,
      name: "Item 24",
      quote: "BEWARE OF ENEMIES OF PROSPERITY - Covetousness.",
      author: "Luke 12:15-20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/luk.12.15",
    },
    {
      id: 25,
      name: "Item 25",
      quote: "BEWARE OF ENEMIES OF PROSPERITY - Wastefulness.",
      author: "Prov 18:9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.18.9",
    },
    {
      id: 26,
      name: "Item 26",
      quote: "BEWARE OF ENEMIES OF PROSPERITY - Pride.",
      author: "Prov 30:9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.30.9",
    },
    {
      id: 27,
      name: "Item 27",
      quote: "Click the link",
      author: "Job 22:21-27",
      category: "Bible",
      url: "https://www.bible.com/bible/1/Job.22.21-27",
    },
    {
      id: 28,
      name: "Item 28",
      quote: "Praise - An expression of reverence and gratitude.",
      author: "Psalm 100:4; Psalm 103:1-2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.100.4",
    },
    {
      id: 29,
      name: "Item 29",
      quote: "Praise - A weapon of war which leads to victory.",
      author: "2 Chronicles 20:21-22; Psalm 149:6-9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2ch.20.21-22",
    },
    {
      id: 30,
      name: "Item 30",
      quote: "Praise - A carrier of God’s presence.",
      author: "Psalm 22:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.22.3",
    },
    {
      id: 31,
      name: "Item 31",
      quote: "Praise - A Command.",
      author: "Psalm 150:6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.150.6",
    },
    {
      id: 32,
      name: "Item 32",
      quote: "Praise - A Source of Strength.",
      author: "Isaiah 61:3; Nehemiah 8:10",
      category: "Bible",
      url: "https://www.bible.com/bible/1/isa.61.3",
    },
    {
      id: 33,
      name: "Item 33",
      quote: "Praise - A Form of Sacrifice.",
      author: "Hebrews 13:15",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.13.15",
    },
    {
      id: 34,
      name: "Item 34",
      quote: "The Benefits of Praise - It Invites God's Presence.",
      author: "Psalm 22:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.22.3",
    },
    {
      id: 35,
      name: "Item 35",
      quote: "The Benefits of Praise - It Establishes God's Word.",
      author: "John 2:13-16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/jhn.2.13-16",
    },
    {
      id: 36,
      name: "Item 36",
      quote: "The Benefits of Praise - It Unlocks Favor.",
      author: "Mark 6:21-23",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mrk.6.21-23",
    },
    {
      id: 37,
      name: "Item 37",
      quote: "The Benefits of Praise - It Deepens Intimacy with God.",
      author: "Psalm 27:4",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.27.4",
    },
    {
      id: 38,
      name: "Item 38",
      quote: "The Benefits of Praise - It turns negative situations around.",
      author: "Habakkuk 3:17-19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/hab.3.17-19",
    },
    {
      id: 39,
      name: "Item 39",
      quote: "The Benefits of Praise - It defeats the Enemy.",
      author: "Psalm 8:2; 68:1",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.8.2",
    },
    {
      id: 40,
      name: "Item 40",
      quote: "Pillars of Acceptable Praise - Salvation.",
      author: "John 3:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/jhn.3.3",
    },
    {
      id: 41,
      name: "Item 41",
      quote: "Pillars of Acceptable Praise - Righteousness.",
      author: "Isaiah 59:2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/isa.59.2",
    },
    {
      id: 42,
      name: "Item 42",
      quote: "Pillars of Acceptable Praise - Joy.",
      author: "Nehemiah 8:10",
      category: "Bible",
      url: "https://www.bible.com/bible/1/neh.8.10",
    },
    {
      id: 43,
      name: "Item 43",
      quote: "Pillars of Acceptable Praise - Release the Past.",
      author: "Isaiah 43:18-19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/isa.43.18-19",
    },
    {
      id: 44,
      name: "Item 44",
      quote: "Pillars of Acceptable Praise - Focus.",
      author: "Isaiah 50:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/isa.50.7",
    },
    {
      id: 45,
      name: "Item 45",
      quote: "Hindrances to Acceptable Praise - Doubt.",
      author: "Psalm 42:5",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.42.5",
    },
    {
      id: 46,
      name: "Item 46",
      quote: "Hindrances to Acceptable Praise - Sin.",
      author: "Psalm 66:18",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.66.18",
    },
    {
      id: 47,
      name: "Item 47",
      quote: "Hindrances to Acceptable Praise - Distractions.",
      author: "Luke 10:40-42",
      category: "Bible",
      url: "https://www.bible.com/bible/1/luk.10.40-42",
    },
    {
      id: 48,
      name: "Item 48",
      quote: "Hindrances to Acceptable Praise - Lack of Joy.",
      author: "Psalm 16:11; Joel 1:12",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.16.11",
    },
    {
      id: 49,
      name: "Item 49",
      quote: "Hindrances to Acceptable Praise - Murmuring/Complaining.",
      author: "1 Corinthians 10:10",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1co.10.10",
    },
    {
      id: 50,
      name: "Item 50",
      quote: "Hindrances to Acceptable Praise - Past Experiences.",
      author: "Isaiah 43:18-19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/isa.43.18-19",
    },
    {
      id: 51,
      name: "Item 51",
      quote: "Steps to Cultivate a Lifestyle of Praise - Word Study.",
      author: "2 Timothy 2:15; Colossians 3:16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2ti.2.15",
    },
    {
      id: 52,
      name: "Item 52",
      quote:
        "Steps to Cultivate a Lifestyle of Praise - Meditation & Journaling.",
      author: "1 Timothy 4:15; Psalm 77:11-12",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1ti.4.15",
    },
    {
      id: 53,
      name: "Item 53",
      quote: "Steps to Cultivate a Lifestyle of Praise - Worship & Praise.",
      author: "Psalm 118:24",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.118.24",
    },
    {
      id: 54,
      name: "Item 54",
      quote: "Steps to Cultivate a Lifestyle of Praise - Prayer.",
      author: "1 Thessalonians 5:17",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1th.5.17",
    },
    {
      id: 55,
      name: "Item 55",
      quote: "Understanding The Power Of Praise.",
      author: "By: Bishop David Oyedepo",
      category: "Book",
      url: "#",
    },

    {
      id: 56,
      name: "Item 56",
      quote:
        "“Say to God, How awesome are Your works! Through the greatness of Your power, your enemies shall submit themselves to You.”",
      author: "Psalm 66:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.66.3",
    },
    {
      id: 57,
      name: "Item 57",
      quote: "“For the kingdom of God is not in word, but in Power.”",
      author: "1 Corinthians 4:20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1co.4.20",
    },
    {
      id: 58,
      name: "Item 58",
      quote:
        "The power is generated by prayer and fasting and released in faith.",
      author: "Psalm 63:1-2 / Jude 1:20 / Matthew 17:19-21",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.63.1-2",
    },
    {
      id: 59,
      name: "Item 59",
      quote:
        "Now faith is the substance of things hoped for, the evidence of things not seen.",
      author: "Hebrews 11:1-3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.11.1-3",
    },
    {
      id: 60,
      name: "Item 60",
      quote:
        "Faith is the practical expression of confidence in God and His Word.",
      author: "Hebrews 10:35-36",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.10.35-36",
    },
    {
      id: 61,
      name: "Item 61",
      quote:
        "Faith is a living force, drawn from the living Word, for a living proof.",
      author: "Hebrews 1:2-3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.1.2-3",
    },
    {
      id: 62,
      name: "Item 62",
      quote:
        "Faith is a spiritual substance which connects man with God for divine intervention.",
      author: "Hebrews 11:1; Luke 8:43/46/48",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.11.1",
    },
    {
      id: 63,
      name: "Item 63",
      quote: "It is obeying God to prove that you believe Him.",
      author: "John 2:5, 9:1-7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/jhn.2.5",
    },
    {
      id: 64,
      name: "Item 64",
      quote:
        "“Faith is a spiritual power point that translates mortality into immortality, exchanges the natural for the supernatural, and translates the human into the divine realm.”",
      author: "Dr. David Oyedepo",
      category: "Quote",
      url: "https://www.goodreads.com/author/show/322630.David_Oyedepo",
    },
    {
      id: 65,
      name: "Item 65",
      quote: "Faith comes by hearing, and hearing by the word of God.",
      author: "Romans 10:17",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.10.17",
    },
    {
      id: 66,
      name: "Item 66",
      quote: "The effectual fervent prayer of a righteous man availeth much.",
      author: "James 5:16-18",
      category: "Bible",
      url: "https://www.bible.com/bible/1/jas.5.16-18",
    },
    {
      id: 67,
      name: "Item 67",
      quote: "God commands us to pray.",
      author: "1 Thessalonians 5:17",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1th.5.17",
    },
    {
      id: 68,
      name: "Item 68",
      quote: "Until the man asks Him, God does not intervene in his affair.",
      author: "Matthew 7:7-8; James 4:2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mat.7.7-8",
    },
    {
      id: 69,
      name: "Item 69",
      quote: "To build strength against the day of adversity.",
      author: "Proverbs 24:10; Isaiah 40:29-31; Matthew 26:38-44",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.24.10",
    },
    {
      id: 70,
      name: "Item 70",
      quote: "So as not to faint, fail or fall.",
      author: "Luke 18:1; Luke 22:31-32; Matthew 26:41",
      category: "Bible",
      url: "https://www.bible.com/bible/1/luk.18.1",
    },
    {
      id: 71,
      name: "Item 71",
      quote: "To access help from above",
      author: "Heb. 4:16/Ps. 56:9/ 2 ",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.4.16",
    },
    {
      id: 72,
      name: "Item 72",
      quote: "Praying in the Holy Ghost gives you enormous prayer advantage.",
      author: "Ephesians 6:18; 1 Corinthians 2:11; Jude 1:20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/eph.6.18",
    },
    {
      id: 73,
      name: "Item 73",
      quote:
        "The fusion of prayer and faith releases tremendous power of God for the delivery of every desire of our heart which no contrary power can withstand.",
      author: "Mark 11:24; Matthew 21:22",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mak.11.24",
    },
    {
      id: 74,
      name: "Item 74",
      quote:
        "Living a consecrated life is what grants access to the mysteries of the kingdom of God.",
      author: "Mark 4:11",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mrk.4.11",
    },
    {
      id: 75,
      name: "Item 75",
      quote: "Consecration gives access to power (unction) and revelation.",
      author: "Proverbs 1:23",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.1.23",
    },
    {
      id: 76,
      name: "Item 76",
      quote:
        "The fight against sin is a war, a war Jesus won for born-again Christians at Calvary.",
      author: "1 John 3:9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1jn.3.9",
    },
    {
      id: 77,
      name: "Item 77",
      quote: "Satan corrupts and beguiles through deception.",
      author: "Revelation 20:10; Ephesians 6:11; 1 Peter 5:8-9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rev.20.10",
    },
    {
      id: 78,
      name: "Item 78",
      quote: "Our victory is secured by the word of God and the Holy Spirit",
      author: "Jeremiah 23:29; John 16:12-14",
      category: "Bible",
      url: "https://www.bible.com/bible/1/jer.23.29",
    },
    {
      id: 79,
      name: "Item 79",
      quote: "Weak conscience.",
      author: "1 Corinthians 8:12",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1co.8.12",
    },
    {
      id: 80,
      name: "Item 80",
      quote: "Defiled conscience.",
      author: "Titus 1:15",
      category: "Bible",
      url: "https://www.bible.com/bible/1/tit.1.15",
    },
    {
      id: 81,
      name: "Item 81",
      quote: "Evil conscience.",
      author: "Hebrews 10:22",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.10.22",
    },
    {
      id: 82,
      name: "Item 82",
      quote: "Dead conscience.",
      author: "1 Timothy 4:2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1ti.4.2",
    },
    {
      id: 83,
      name: "Item 83",
      quote: "Living a sanctified life is the biblical proof of redemption.",
      author: "Math 7:16-23. Prov 14:34. Psalm 112:1-3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mat.7.16-23",
    },
    {
      id: 84,
      name: "Item 84",
      quote: "Honour and eternity with Christ in Heaven.",
      author: "2 Timothy 2:20-21; Hebrews 9:27",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2ti.2.20",
    },
    {
      id: 85,
      name: "Item 85",
      quote: "Pillars of Destiny.",
      author: "By Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/pillars-of-destiny",
    },
    {
      id: 86,
      name: "Item 86",
      quote: "Dynamics of Holiness.",
      author: "By Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/dynamics-of-holiness",
    },
    {
      id: 87,
      name: "Item 87",
      quote: "Walking in the Newness of Life.",
      author: "By Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/walking-in-the-newness-of-life",
    },
    {
      id: 88,
      name: "Item 88",
      quote: "Conquering Controlling Powers.",
      author: "By Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/conquering-controlling-powers",
    },
    {
      id: 89,
      name: "Item 89",
      quote:
        "For thus saith the LORD that created the heavens; God himself that formed the earth and made it; he hath established it, he created it not in vain, he formed it to be inhabited: I am the LORD; and there is none else.",
      author: "Isaiah 45:18 (KJV)",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ISA.45.18.KJV",
    },

    {
      id: 90,
      name: "Item 90",
      quote:
        "“There is no mountain anywhere; everybody's mountain is his ignorance”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.azquotes.com/quote/1383945",
    },
    {
      id: 91,
      name: "Item 91",
      quote:
        "But as truly as I live, all the earth shall be filled with the glory of the LORD.",
      author: "Numbers 14:21 (KJV)",
      category: "Bible",
      url: "https://www.bible.com/bible/1/num.14.21",
    },
    {
      id: 92,
      name: "Item 92",
      quote:
        "For the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea.",
      author: "Habakkuk 2:14 (KJV)",
      category: "Bible",
      url: "https://www.bible.com/bible/1/hab.2.14",
    },
    {
      id: 93,
      name: "Item 93",
      quote:
        "“This is where the notes for the 24/25 session stop on moodle. From here down is 23/24 notes. Feel free to go on.”",
      author: "Rerel'Oluwa Tooki",
      category: "Quote",
      url: "https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/",
    },

    {
      id: 94,
      name: "Item 94",
      quote:
        "“When we listen and celebrate what is both common and different, we become wiser, more inclusive, and better as an organization.”",
      author: "Pat Wadors",
      category: "Quote",
      url: "https://www.google.com/search?q=%E2%80%9CWhen+we+listen+and+celebrate+what+is+both+common+and+different%2C+we+become+wiser%2C+more+inclusive%2C+and+better+as+an+organization.%E2%80%9D+%E2%80%94+Pat+Wadors.&oq=%E2%80%9CWhen+we+listen+and+celebrate+what+is+both+common+and+different%2C+we+become+wiser%2C+more+inclusive%2C+and+better+as+an+organization.%E2%80%9D+%E2%80%94+Pat+Wadors.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI5M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 95,
      name: "Item 95",
      quote: "“Diversity doesn't look like anyone. It looks like everyone.”",
      author: "Karen Draper",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/10067110-diversity-doesn-t-look-like-anyone-it-looks-like-everyone",
    },
    {
      id: 96,
      name: "Item 96",
      quote:
        "Global Citizenship Education: Topics and Learning Objectives. United Nations Educational, Scientific and Cultural Organization, Paris.",
      author: "By: UNESCO (2015)",
      category: "Book",
      url: "https://www.google.com/search?q=UNESCO+(2015).+Global+Citizenship+Education%3A+Topics+and+Learning+Objectives.+United+Nations+Educational%2C+Scientific+and+Cultural+Organization%2C+Paris.&oq=UNESCO+(2015).+Global+Citizenship+Education%3A+Topics+and+Learning+Objectives.+United+Nations+Educational%2C+Scientific+and+Cultural+Organization%2C+Paris.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI0M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 97,
      name: "Item 97",
      quote:
        "Global Citizenship. Whitepaper about an emerging concept. Willington: MF.",
      author: "By: The Melton Foundation (2021)",
      category: "Book",
      url: "https://www.google.com/search?q=The+Melton+Foundation+(2021).+Global+Citizenship.+Whitepaper+about+an+emerging+concept.+Willington%3A+MF.&oq=The+Melton+Foundation+(2021).+Global+Citizenship.+Whitepaper+about+an+emerging+concept.+Willington%3A+MF.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzIyMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 98,
      name: "Item 98",
      quote: "Global Citizenship in the Classroom. Oxfam, Oxford.",
      author: "By: Oxfam (2015)",
      category: "Book",
      url: "https://www.google.com/search?q=Oxfam+(2015).+Global+Citizenship+in+the+Classroom.+Oxfam%2C+Oxford.&oq=Oxfam+(2015).+Global+Citizenship+in+the+Classroom.+Oxfam%2C+Oxford.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzIyOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 99,
      name: "Item 99",
      quote:
        "“Education is the most powerful weapon you can use to change the world.”",
      author: "Nelson Mandela",
      category: "Quote",
      url: "https://www.google.com/search?q=%E2%80%9CEducation+is+the+most+powerful+weapon+you+can+use+to+change+the+world.%E2%80%9D+Nelson+Mandela&oq=%E2%80%9CEducation+is+the+most+powerful+weapon+you+can+use+to+change+the+world.%E2%80%9D+Nelson+Mandela&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzMxNGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1",
    },
    {
      id: 100,
      name: "Item 100",
      quote:
        "“Before you finish eating breakfast this morning, you’ve depended on more than half the world”",
      author: "Martin Luther King",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/10684635-did-you-ever-stop-to-think-that-you-can-t-leave",
    },
    {
      id: 101,
      name: "Item 101",
      quote: "“No one will be remembered by what he has but what he adds.”",
      author: "Bishop David O. Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=Bishop+David+Oyedepo&gs_lcrp=EgZjaHJvbWUqDwgAEEUYOxjjAhixAxiABDIPCAAQRRg7GOMCGLEDGIAEMgoIARAuGLEDGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGD3SAQg0NjI4ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 102,
      name: "Item 102",
      quote:
        "“There is enough in the world for everyone’s need, but not for everyone’s greed.”",
      author: "Mohandas Gandhi",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/427443-the-world-has-enough-for-everyone-s-need-but-not-enough",
    },
    {
      id: 103,
      name: "Item 103",
      quote:
        "“And in the end, it’s not the years in your life that counts; it’s the life in your years.”",
      author: "Abraham Lincoln",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/5851097-and-in-the-end-it-s-not-the-years-in-your",
    },
    {
      id: 104,
      name: "Item 104",
      quote:
        "But God is timeless with the ability to make a thousand years fit into a day",
      author: "2 Peter 3:8",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2pe.3.8",
    },
    {
      id: 105,
      name: "Item 105",
      quote: "Only a fool says there is no God",
      author: "Psalm 14:1",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.14.1",
    },
    {
      id: 106,
      name: "Item 106",
      quote:
        "The heavens declare the glory of God; And the firmament sheweth his handywork. Day unto day uttereth speech, And night unto night sheweth knowledge. There is no speech nor language, Where their voice is not heard.",
      author: "Psalm 19:1-3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.19.1-3",
    },
    {
      id: 107,
      name: "Item 107",
      quote:
        "For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse",
      author: "Romans 1:20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.1.20",
    },
    {
      id: 108,
      name: "Item 108",
      quote: "Only those who acknowledge God can come to know Him",
      author: "Hebrews 11:6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/heb.11.6",
    },
    {
      id: 109,
      name: "Item 109",
      quote:
        "And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient",
      author: "Romans 1:28",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.1.28",
    },
    {
      id: 110,
      name: "Item 110",
      quote:
        "Those who have no place for God in their mind are made reprobate concerning the faith",
      author: "2 Timothy 3:8",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2ti.3.8",
    },
    {
      id: 110,
      name: "Item 110",
      quote:
        "I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live",
      author: "Deuteronomy 30:19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/deu.30.19",
    },
    {
      id: 112,
      name: "Item 112",
      quote: "The creation account is documented in",
      author: "Genesis 1:1",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.1.1",
    },
    {
      id: 113,
      name: "Item 113",
      quote: "The creation account in Genesis 1 is corroborated in",
      author: "Psalms 139:13-14",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.139.13-14",
    },
    {
      id: 114,
      name: "Item 114",
      quote: "The New Testament also attests to creationism",
      author: "Colossians 1:16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/col.1.16",
    },
    {
      id: 115,
      name: "Item 115",
      quote: "The New Testament also attests to creationism",
      author: "Romans 1:20",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.1.20",
    },
    {
      id: 116,
      name: "Item 116",
      quote:
        "So God created man in his own image, in the image of God created he him; male and female created he them.",
      author: "Genesis 1:27",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.1.27",
    },
    {
      id: 117,
      name: "Item 117",
      quote:
        "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
      author: "Genesis 2:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.2.7",
    },
    {
      id: 118,
      name: "Item 118",
      quote:
        "For thou hast made him a little lower than the angels, And hast crowned him with glory and honour.",
      author: "Psalm 8:5",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.8.5",
    },
    {
      id: 119,
      name: "Item 119",
      quote:
        "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.",
      author: "Genesis 2:15",
      category: "Bible",
      url: "https://www.bible.com/bible/1/gen.2.15",
    },
    {
      id: 120,
      name: "Item 120",
      quote: "God created You",
      author: "Psalm 100:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/psa.100.3",
    },
    {
      id: 121,
      name: "Item 121",
      quote: "You carry his Image",
      author: "Genesis 1:27",
      category: "Bible",
      url: "https://www.bible.com/bible/1/Gen.1.27",
    },
    {
      id: 122,
      name: "Item 122",
      quote: "You carry his Breath",
      author: "Job 27:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/Job.27.3",
    },
    {
      id: 123,
      name: "Item 123",
      quote: "You are to Work for God",
      author: "Jer.29.11",
      category: "Bible",
      url: "https://www.bible.com/bible/1/Jer.29.11",
    },
    {
      id: 124,
      name: "Item 124",
      quote:
        "“It is not the consciousness of men that determines their being; but, on the contrary, it is their social being that determines their consciousness”",
      author: "Karl Marx (1818-1883)",
      category: "Quote",
      url: "https://www.google.com/search?q=%E2%80%9CIt+is+not+the+consciousness+of+men+that+determines+their+being%3B+but%2C+on+the+contrary%2C+it+is+their+social+being+that+determines+their+consciousness%E2%80%9D%E2%80%A6+Karl+Marx+(1818-1883)&oq=%E2%80%9CIt+is+not+the+consciousness+of+men+that+determines+their+being%3B+but%2C+on+the+contrary%2C+it+is+their+social+being+that+determines+their+consciousness%E2%80%9D%E2%80%A6+Karl+Marx+(1818-1883)&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzQyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 125,
      name: "Item 125",
      quote:
        "When the righteous are in authority, the people rejoice: But when the wicked beareth rule, the people mourn.",
      author: "Proverbs 29:2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/pro.29.2",
    },
    {
      id: 126,
      name: "Item 126",
      quote: "Outliers: The Story of Success. New York: Back Bay Books.",
      author: "By: Gladwell, M. (2010)",
      category: "Book",
      url: "https://www.goodreads.com/book/show/3228917-outliers",
    },
    {
      id: 127,
      name: "Item 127",
      quote:
        "Political Consciousness and Governance in Africa. African Renaissance, Vol. 17, No 4, 9-32. ",
      author: "By: Chidozie, F.C., Aje, O.O & Ogunnowo, O.E (2020)",
      category: "Book",
      url: "https://www.google.com/search?q=Chidozie%2C+F.C.%2C+Aje%2C+O.O+%26+Ogunnowo%2C+O.E+(2020)+%E2%80%9CPolitical+Consciousness+and+Governance+in+Africa%E2%80%9D.+African+Renaissance%2C+Vol.+17%2C+No+4%2C+9-32.&oq=Chidozie%2C+F.C.%2C+Aje%2C+O.O+%26+Ogunnowo%2C+O.E+(2020)+%E2%80%9CPolitical+Consciousness+and+Governance+in+Africa%E2%80%9D.+African+Renaissance%2C+Vol.+17%2C+No+4%2C+9-32.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI2MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 128,
      name: "Item 128",
      quote: "Political Consciousness:  A Perpetual Quest",
      author: "By: Miller, V. (2002)",
      category: "Book",
      url: "https://www.google.com/search?q=Miller%2C+V.+(2002)+%E2%80%9CPolitical+Consciousness%3A+A+Perpetual+Quest%E2%80%9D.&oq=Miller%2C+V.+(2002)+%E2%80%9CPolitical+Consciousness%3A++A+Perpetual+Quest%E2%80%9D.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI0NWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 129,
      name: "Item 129",
      quote: "Conscious Politics. A TEDTalk Recording.",
      author: "By: Packer, D. (2016)",
      category: "Book",
      url: "https://www.google.com/search?q=Packer%2C+D.+(2016)+%E2%80%9CConscious+Politics%E2%80%9D.+A+TEDTalk+Recording.&oq=Packer%2C+D.+(2016)+%E2%80%9CConscious+Politics%E2%80%9D.+A+TEDTalk+Recording.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEzMjhqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },

    {
      id: 130,
      name: "Item 130",
      quote: "“A glorious result demands a serious approach”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=bishop+david+oyedepo&oq=bi&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgxODc0ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 131,
      name: "Item 131",
      quote:
        "“God has a place prepared for you in life. A discovery of it is what is called vision.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=bishop+david+oyedepo&oq=bi&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgxODc0ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 132,
      name: "Item 132",
      quote: "“Diversity in all its forms is the path to greatness.”",
      author: "James D. Wilson",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/10095779-diversity-in-all-its-forms-is-the-path-to-greatness",
    },
    {
      id: 133,
      name: "Item 133",
      quote: "“Strength lies in differences, not in similarities.”",
      author: "Stephen R. Covey",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/68074-strength-lies-in-differences-not-in-similarities",
    },

    {
      id: 134,
      name: "Item 134",
      quote:
        "Everyone must submit to governing authorities. For all authority comes from God, and those in positions of authority have been placed there by God.",
      author: "Romans 13:1",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ROM.13.1.KJV",
    },
    {
      id: 135,
      name: "Item 135",
      quote:
        "So you must submit to them, not only to avoid punishment, but also to keep a clear conscience. ",
      author: "Romans 13:5",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.13.5",
    },

    {
      id: 136,
      name: "Item 136",
      quote:
        "“No one lights a lamp and then puts it under a basket. Instead, a lamp is placed on a stand, where it gives light to everyone in the house. E.g. Volunteer for community service, help the needy & the poor. In the same way, let your good deeds shine out for all to see, so that everyone will praise your heavenly Father”",
      author: "Matthew 5:15-16",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Matthew%205%3A15-16&version=NIV",
    },
    {
      id: 137,
      name: "Item 137",
      quote: "Pray for peace in Jerusalem. May all who love this city prosper.",
      author: "Psalm 122:6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PSA.122.6.KJV",
    },
    {
      id: 138,
      name: "Item 138",
      quote:
        "For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others.",
      author: "Romans 12:4–5",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans+12%3A4%E2%80%935&version=NIV",
    },
    {
      id: 139,
      name: "Item 139",
      quote: "Click the link",
      author: "Ecclesiastes 4:9-12 NIV",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Ecclesiastes+4%3A9-12+&version=NIV",
    },
    {
      id: 140,
      name: "Item 140",
      quote: "Can two walk together except they agree?’",
      author: "Amos 3:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/amo.3.3",
    },
    {
      id: 141,
      name: "Item 141",
      quote:
        "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      author: "Maya Angelou",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/5934-i-ve-learned-that-people-will-forget-what-you-said-people",
    },
    {
      id: 142,
      name: "Item 142",
      quote:
        "Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.",
      author: "Matthew 5:24",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mat.5.24",
    },
    {
      id: 143,
      name: "Item 143",
      quote:
        "Blessed are the peacemakers: for they shall be called the children of God.",
      author: "Matthew 5:9",
      category: "Bible",
      url: "https://www.bible.com/bible/1/mat.5.9",
    },

    {
      id: 144,
      name: "Item 144",
      quote:
        "Pay your taxes, too, for these same reasons. For government workers need to be paid. They are serving God in what they do",
      author: "Romans 13:6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.13.6",
    },
    {
      id: 145,
      name: "Item 145",
      quote:
        "“Owe nothing to anyone—except for your obligation to love one another. If you love your neighbor, you will fulfill the requirements of God’s law”",
      author: "Romans 13:8",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.13.8",
    },
    {
      id: 146,
      name: "Item 146",
      quote:
        "“Love does no wrong to others, so love fulfills the requirements of God’s law”",
      author: "Romans 13:10",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.13.10",
    },
    {
      id: 147,
      name: "Item 147",
      quote:
        "Because we belong to the day, we must live decent lives for all to see. Don’t participate in the darkness of wild parties and drunkenness, or in sexual promiscuity and immoral living, or in quarreling and jealousy.",
      author: "Romans 13:13",
      category: "Bible",
      url: "https://www.bible.com/bible/1/rom.13.13",
    },
    {
      id: 148,
      name: "Item 148",
      quote:
        "Always be humble and gentle. Be patient with each other, making allowance for each other’s faults because of your love. Make every effort to keep yourselves united in the Spirit, binding yourselves together with peace",
      author: "Ephesians 4:2-3",
      category: "Bible",
      url: "https://www.bible.com/bible/111/EPH.4.2-3.NIV",
    },
    {
      id: 149,
      name: "Item 149",
      quote:
        "Wherefore, my beloved, as ye have always obeyed, not as in my presence only, but now much more in my absence, work out your own salvation with fear and trembling.",
      author: "Philippians 2:12 (KJV)",
      category: "Bible",
      url: "https://www.bible.com/bible/1/php.2.12",
    },
    {
      id: 150,
      name: "Item 150",
      quote: "Thank You!",
      author: "Rerel'Oluwa Tooki",
      category: "Quote",
      url: "https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/",
    },
  ]);

  const [displayTextArea, setDisplayTextArea] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  // Function to send feedback email
  const sendFeedbackEmail = (e: any) => {
    e.preventDefault();
    if (feedbackMessage.trim() !== "") {
      emailjs
        .send(
          "service_u4hp1mr",
          "template_8hjpcrt",
          {
            from_name: "User",
            to_name: "Your Name",
            message: feedbackMessage,
          },
          "x5ittGCaJN71qzFuY"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Show alert that feedback has been sent
            alert("Feedback sent!");
            // Hide the input field
            setDisplayTextArea(false);
            // Reset feedback message
            setFeedbackMessage("");
            console.log(setItems.length);
          },
          (error) => {
            console.log(error.text);
            // Show alert for error
            alert("Error sending feedback. Please try again later.");
          }
        );
    } else {
      // Show alert if feedback message is blank
      alert("Insufficient character length!");
    }
  };

  // Function to toggle display of input field
  const toggleDisplay = () => {
    setDisplayTextArea(!displayTextArea);
    setFeedbackMessage(""); // Reset feedback message
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Define the state to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Define the state to keep track of the visibility of the input box
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Define the state to keep track of the visibility of the search results box
  const [isVisible2, setIsVisible2] = useState<boolean>(false);

  // Define the state to keep track of the visibility of the options box
  const [optionsIsVisible, setOptionsIsVisible] = useState<boolean>(false);

  // Define the state to update the text f the options box
  const [optionsBoxText, setOptionsBoxText] = useState<string>("Option");

  // Define the state to keep track of the visibility of the list options box
  const [optionsListIsVisible, setOptionsListIsVisible] =
    useState<boolean>(false);

  // Define the state for the search input and search results
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  // Use useEffect to focus on the input field when it becomes visible
  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  // // Function to handle the next button click and iterate through the array
  // const handleNextButtonClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  // };

  // Function to handle the next button click and iterate through the array
  const handleNextButtonClick = () => {
    console.log("sr length is:");
    console.log(searchResults.length);
    if (searchResults.length > 0) {
      console.log("sr >0");
      // Find the index of the current item in searchResults
      const currentIndexInSearch = searchResults.findIndex(
        (item) => item.id === items[currentIndex].id
      );

      // Calculate the next index in searchResults
      const nextIndexInSearch =
        (currentIndexInSearch + 1) % searchResults.length;

      // Find the corresponding item in items array
      const nextItemInSearchResults = searchResults[nextIndexInSearch];

      // Find the index of nextItemInSearchResults in the items array
      const nextIndexInItems = items.findIndex(
        (item) => item.id === nextItemInSearchResults.id
      );

      // Set the currentIndex to the next index in items array
      setCurrentIndex(nextIndexInItems);
    } else {
      // If searchResults is empty, simply increment the index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      console.log("sr equalts to 0");
    }
  };

  // // Function to handle the previous button click and iterate through the array
  // const handlePrevButtonClick = () => {
  //   if (currentIndex !== 0) {
  //     setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
  //   } else {
  //     setCurrentIndex((prevIndex) => (prevIndex = 90));
  //   }
  // };

  // Function to handle the previous button click and iterate through the array
  const handlePrevButtonClick = () => {
    if (searchResults.length > 0) {
      console.log("sr >0");
      // Find the index of the current item in searchResults
      const currentIndexInSearch = searchResults.findIndex(
        (item) => item.id === items[currentIndex].id
      );

      // Calculate the next index in searchResults
      const nextIndexInSearch =
        (currentIndexInSearch - 1) % searchResults.length;

      // Find the corresponding item in items array
      const nextItemInSearchResults = searchResults[nextIndexInSearch];

      // Find the index of nextItemInSearchResults in the items array
      const nextIndexInItems = items.findIndex(
        (item) => item.id === nextItemInSearchResults.id
      );

      // Set the currentIndex to the next index in items array
      setCurrentIndex(nextIndexInItems);
    } else {
      // If searchResults is empty, simply increment the index
      if (currentIndex !== 0) {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
      } else {
        setCurrentIndex(150);
      }
    }
  };

  // Function to handle the search button click
  const handleSearchButtonClick = () => {
    isVisible == false
      ? setIsVisible(true)
      : searchText
      ? setIsVisible(true)
      : setIsVisible(false);

    searchText && setIsVisible2(true);

    optionsIsVisible && setOptionsIsVisible(false);
    // Filter the items based on the search text or show all if no text
    const results = searchText
      ? items.filter(
          (item) =>
            item.quote.toLowerCase().includes(searchText.toLowerCase()) ||
            item.author.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];
    console.log("results length:");
    console.log(results.length);
    console.log("search results length1: ");
    console.log(searchResults.length);

    setSearchResults(results);
    console.log("search results length2: ");
    console.log(searchResults.length);

    setOptionsBoxText("Option");
    !searchText && setIsVisible2(false);

    // !searchText && setOptionsBoxText("ALL");
  };

  // Function to handle the list button click. It also acts as a clear search button
  const handleListButtonClick = (id: number) => {
    setCurrentIndex(id);
    setIsVisible2(false);
  };

  // Function to handle the filter button click. Displays the option button
  const handleFilterButtonClick = () => {
    console.log("filter button");
    isVisible && setIsVisible(false);
    !optionsIsVisible ? setOptionsIsVisible(true) : setOptionsIsVisible(false);
    optionsListIsVisible && setOptionsListIsVisible(false);
  };

  // Function to handle the options button click. Displays the list of options
  const handleOptionsButtonClick = () => {
    console.log("options button");
    !optionsListIsVisible
      ? setOptionsListIsVisible(true)
      : setOptionsListIsVisible(false);
  };

  // Function to handle the All button click. Displays everything.
  const handleAllButtonClick = () => {
    console.log("ALL button");
    setOptionsListIsVisible(false);
    const allResults = items;
    setSearchResults(allResults);
    setOptionsBoxText("ALL");
    console.log(allResults);
    setIsVisible2(true);
  };

  // Function to handle the books button click. Displays all the books.
  const handleBooksButtonClick = () => {
    console.log("Books button");
    setOptionsListIsVisible(false);
    const bookResults = items.filter((item) => item.category === "Book");
    setSearchResults(bookResults);
    setOptionsBoxText("Book");
    setIsVisible2(true);
  };

  // Function to handle the quotes button click. Displays all the quotes.
  const handleQuotesButtonClick = () => {
    console.log("Quotes button");
    setOptionsListIsVisible(false);
    const quoteResults = items.filter((item) => item.category === "Quote");
    setSearchResults(quoteResults);
    setOptionsBoxText("Quote");
    setIsVisible2(true);
  };

  // Function to handle the scriptures button click. Displays all the scriptures.
  const handleScripturesButtonClick = () => {
    console.log("Scriptures button");
    setOptionsListIsVisible(false);
    setOptionsBoxText("Scripture");
    const scriptureResults = items.filter((item) => item.category === "Bible");
    setSearchResults(scriptureResults);
    setIsVisible2(true);
    //     const scriptureResults = items.filter((item) => item.category === "Bible");
    // setSearchResults(scriptureResults);
  };

  // Function to handle Enter key press in the input field
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      handleSearchButtonClick();
    }
  };

  /* New Additions */
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="bg-dark-blues flex flex-col items-center justify-center min-h-screen">
        <AlertModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className="whitespace-nowrap text-[4.5vw] md:text-[3.15vw] lg:text-[2.25vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none mb-[2.5vw] flex flex-row w-[85vw] md:w-[75vw] lg:w-[80vw]">
          <div className="flex flex-row sml-[36%] md:sml-[39%] lg:sml-[43%] w-[100%] justify-between sborder-2 items-center">
            {/* Toggle Switch */}
            <div className="invisible lg:visible text-[16px] xl">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`group relative flex w-14 h-8 xl:w-16 xl:h-8 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10 ${
                  enabled ? "shadow-[0_0_8px_2px_rgba(255,254,237,0.5)]" : ""
                }`}
              >
                <p className="absolute text-white mix-blend-difference">Quiz</p>

                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full transition duration-200 ease-in-out group-data-[checked]:translate-x-6 h-6 w-6 xl:w-8  ${
                    enabled ? "bg-white/80" : "bg-white/40"
                  }`}
                />
              </Switch>
            </div>
            <div
              className="xl:underline underline-offset-4 tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] sborder-2 flex flex-col justify-center"
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              TMC 511
            </div>
            {/* Search input and button */}
            <div className="flex flex-row gap-[2vw] justify-between pl-[2vw]">
              {isVisible && (
                <div className="" data-aos="zoom-in" data-aos-duration="700">
                  <input
                    id="signUp"
                    type="text"
                    ref={inputRef}
                    placeholder="Search..."
                    value={searchText}
                    onKeyDown={handleInputKeyPress}
                    className="w-[100%] relative top-[3px] xl:h-[90%] text-black px-[1.2vw] nxl:px-[0.8vw] pb-[0.2vw] nxl:pb-[0.4vw] nxl:pt-[0.3vw] rounded-md"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              )}
              {optionsIsVisible && (
                <div className="relative text-left ">
                  <div className="w-[100%]">
                    <div
                      className=""
                      data-aos="zoom-in"
                      data-aos-duration="700"
                    >
                      <button
                        onClick={handleOptionsButtonClick}
                        className="flex flex-row w-full items-center gap-x-1.5 rounded-md bg-white gap-[2vw] px-[1.2vw] py-[1.5vw] md:py-[0.8vw] lg:py-[0.4vw] xl:py-[0.8vw] nxl:px-3 nxl:py-2 nxl:text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 w-[100%] text-[2.8vw] md:text-[12px] lg:text-[14px] relative top-[0.4vw]"
                      >
                        <div className="borsder-2">
                          {optionsBoxText === "ALL"
                            ? optionsBoxText
                            : optionsBoxText + "s"}
                        </div>
                        <FaChevronDown
                          className="-msr-1  text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>{" "}
                  {optionsListIsVisible && (
                    <div
                      className="absolute right-0 mt-2.5 md:mt-[2.1vw] lg:mt-[1.8vw] min-w-[25vw] lg:min-w-[20vw] xl:min-w-[15vw] rounded-lg bg-white leading-snug nxl:leading-tight text-[5.5vw] md:text-[17px] lg:text-[21px] nxl:text-[24px] xl:text-[26px] text-[#5e5d64] z-30 shadow-2xl border-2 "
                      data-aos="zoom-in"
                      data-aos-duration="700"
                    >
                      <div className="border-t2 hover:text-mid-blue hover:bg-light-brown hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleAllButtonClick}
                          className=" w-full"
                        >
                          All
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-mid-blue hover:bg-light-brown hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleBooksButtonClick}
                          className="w-full"
                        >
                          Books
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-mid-blue hover:bg-light-brown hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleQuotesButtonClick}
                          className=" w-full "
                        >
                          Quotes
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-mid-blue hover:bg-light-brown hover:rounded-md border-light-cyans text-[4.8vw] md:text-[17px] lg:text-[19px] nxl:text-[24px] xl:text-[26px]">
                        <button
                          onClick={handleScripturesButtonClick}
                          className="w-full "
                        >
                          Scriptures
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="" data-aos="zoom-out" data-aos-duration="500">
                <button className="h-[100%]" onClick={handleSearchButtonClick}>
                  <IoMdSearch
                    color="aquamarine"
                    title="Search for any Book, Quote or Scripture"
                  />
                </button>
              </div>
              <div className="" data-aos="zoom-out" data-aos-duration="500">
                <button className="h-[100%]" onClick={handleFilterButtonClick}>
                  <RiFilter2Line
                    color="aquamarine"
                    title="Sort by Books, Quotes or Scriptures"
                  />
                </button>
              </div>
              <div className="absolute top-4 right-6 lg:hidden text-[15px]">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`group relative flex w-12 h-6 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10 ${
                    enabled ? "shadow-[0_0_8px_2px_rgba(255,254,237,0.5)]" : ""
                  }`}
                >
                  <p className="absolute translate-y-[-4px] text-white mix-blend-difference">
                    Quiz
                  </p>

                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full transition duration-200 ease-in-out group-data-[checked]:translate-x-6 h-4 w-4 ${
                      enabled ? "bg-white/80" : "bg-white/40"
                    }`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mb-[5vw] bg-dark-grayish-blues w-[85vw] md:w-[75vw] lg:w-[80vw] mx-[7.5vw] md:mx-[12.5vw] rounded-[1.8vw] flex flex-col items-center justify-center px-[4vw] md:px-[2.8vw] lg:px-[2vw] pt-[6vw] md:pt-[19px] nxl:pt-[35px] text-[5.5vw] md:text-[17px] lg:text-[21px] nxl:text-[28px] xl:text-[37px] leading-snug lg:leading-normal nxl:leading-snug"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="font-manrope mb-[6vw] md:mb-[18px] nxl:mb-[30px] xl:mb-[35px]  text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none">
            <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[21.5vw] md:w-[20.5vw] lg:w-[26.7vw] border-light-cyans"></div>
              <div>
                {/* Change this part to display the category */}
                {optionsBoxText === "ALL" || optionsBoxText === "Option"
                  ? items[currentIndex].category.toUpperCase()
                  : optionsBoxText.toUpperCase()}
                {/* {optionsBoxText === "ALL" || optionsBoxText === "Option"
                  ? "ADVICE"
                  : optionsBoxText.toUpperCase()} */}
              </div>
              <div className="text-neon-greens underline underline-offset-4 tracking-wider decoration-light-cyans/70">
                #{items[currentIndex].id}
              </div>
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[21.5vw] md:w-[20.3vw] lg:w-[26.7vw] border-neon-greens"></div>
            </div>
          </div>
          {/* Display quotes/all results */}
          {(searchResults.length == 0 || isVisible2 == false) && (
            <div
              className="scroll pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.04vw] text-light-cyans text-center selection:bg-light-cyans selection:text-dark-grayish-blues overflow-y-auto max-h-[28.8vh] "
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <div>{items[currentIndex].quote}</div>
            </div>
          )}
          {/* Display search results */}
          {isVisible2 == true && searchResults.length !== 0 && (
            <div
              className="border-2 absoluste overflow-x-hidden overflow-y-scroll w-full scroll rounded-md bg-white text-dark-grayish-blues z-20 scroll pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.04vw]  text-center selection:text-light-cyans selection:bg-dark-grayish-blues max-h-[28.8vh] text-[5.5vw] md:text-[17px] lg:texts-[21px] nxl:text-[22px] xl:text-[25px]"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <h2>Search Results:</h2>
              <ul className="list-decimal list-inside flex flex-col ">
                {searchResults.map((result) => (
                  <button
                    onClick={() => handleListButtonClick(result.id)}
                    className="border-t-2 border-light-cyans w-[100%] text-start hover:text-light-cyans hover:bg-dark-grayish-blues hover:rounded-md"
                  >
                    <li
                      className="whitespace-nowrap text-ellipsis overflow-hidden "
                      key={result.id}
                    >
                      {optionsBoxText === "ALL" || optionsBoxText === "Option"
                        ? result.quote
                        : result.author + " - " + result.quote}
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          )}

          <div
            className="flex self-end mr-[1.5vw] md:mr-[4.8vw] lg:mr-[3.3vw] hover:scale-[1.1] hover:mr-[4.8vw] hover:md:scale-[1.2] hover:md:mr-[5.8vw] hover:md:mr-[8.1vw] hover:lg:mr-[5.8vw] select-none"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div className="border-t-[0.2vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] w-[10vw] md:w-[7vw] lg:w-[5vw] border-neon-greens mr-[1.5vw] md:mr-[1vw]"></div>
            {/* Conditionally Blurred Author Name */}
            <div
              className={`text-light-cyans text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] underline underline-offset-4 tracking-wider decoration-mid-blue/70 ${
                enabled ? "blur-md" : ""
              }`}
            >
              <a
                href={items[currentIndex].url}
                target="_blank"
                title={items[currentIndex].author}
              >
                {items[currentIndex].author}
              </a>
            </div>
          </div>

          <div className="relative top-[5vw] md:top-[3.9vw] lg:top-[2.5vw] select-none flex flex-row gap-[3.5vw] lg:gap-[2vw]">
            <div className="" title="Previous">
              <button
                className="bg-neon-greens w-[12vw] md:w-[7.8vw] lg:w-[5vw] h-[12vw] md:h-[7.8vw] lg:h-[5vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={handlePrevButtonClick}
              >
                <MdSkipPrevious />
              </button>
            </div>
            <div className="" title="Next">
              <button
                className="bg-neon-greens w-[12vw] md:w-[7.8vw] lg:w-[5vw] h-[12vw] md:h-[7.8vw] lg:h-[5vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={handleNextButtonClick}
              >
                <MdSkipNext />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 ml-[2vw] pb-[1.2vw] text-light-cyans underline-offset-2 nxl:underline-offset-4 md:pb-[1.2vw] text-[2vw] nsm:text-[1.2vw] xl:text-[1vw] select-none">
          © 2025{" "}
          <a
            href="https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/"
            target="_blank"
            className="underline text-neon-greens tracking-wide"
            title="About Rerel'Oluwa Tooki"
          >
            Rerel'Oluwa Tooki
          </a>
        </div>
        <div className="fixed bottom-0 right-0 mr-[2vw] pb-[1.2vw] text-light-cyans md:underline-offset-2 nxl:underline-offset-4 md:pb-[1.2vw] text-[2vw] nsm:text-[1.2vw] xl:text-[1vw] select-none">
          {displayTextArea && (
            <div className="flex flex-col md:flex-row gap-[10px] md:gap-auto">
              <textarea
                placeholder="Feedback? Suggestions?"
                className="overflow-y-auto border border-gray-400 px-2 pt-[4px] w-[40vw] max-w-[330px] h-auto max-h-[25px] rounded-md text-black text-[10px]"
                value={feedbackMessage}
                name="message"
                onChange={(e) => setFeedbackMessage(e.target.value)}
              />
              <div className="self-end md:self-auto">
                <button
                  onClick={sendFeedbackEmail}
                  className="ml-2 px-4 py-[2px] bg-light-brown text-light-cyans h-full max-h-[25px] text-white rounded-sm md:rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          )}
          {!displayTextArea && (
            <div onClick={toggleDisplay} className="cursor-pointer">
              <MdOutlineQuestionAnswer
                fill="rgb(255, 254, 237)"
                className="w-[6vw] h-[6vw] max-w-[25px] max-h-[25px]"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TMCCard;
