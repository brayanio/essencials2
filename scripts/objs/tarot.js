import i0 from '../i0.js'

const asset = src => `./assets/${src}.PNG`

export default () => { return {
    thefool: {
        name: 'The Fool',
        suit: 'arcana',
        i: 1,
        advice: `Lighten up. Let yourself be spontaneous enough to stretch beyond the realm of logic. There is no advantage to be gained by thinking you possess the knowledge, power, or control to direct reality. Open and receive without question, instead of trying to manage what's happening right now. The Fool has no ambition to manipulate a specific outcome. Just be happy to be part of the whole. Release any demands or expectations. Give your complete attention to events as they are occurring in the present moment.`,
        reverseAdvice: `You are encountering an unfinished side of yourself, a part still caught in the shadows of ignorance or immaturity. An emotional reflex or psychological attitude could be holding you back from responding authentically and naturally. Release yourself from any dogmas or taboos so your natural truthfulness and instinct for right action can be restored.`,
        desc: "The Fool is the first card in a Tarot deck because he is the most vulnerable of all the Tarot's archetypes. He has not yet experienced the ups and downs of life, leaving him unaware of the magnitude of life's challenges, and the strength and potential he holds. When The Fool comes up in a Tarot reading, you are encouraged to take on his open, willing energy and embrace all that lies ahead of you without worry."
    },
    themagician: {
        name: 'The Magician',
        suit: 'arcana',
        i: 2,
        advice: `Have faith in your innate creativity. Give your questioning nature and free-associating mind plenty of room to explore the subject at hand. Behave just as if you were an open-minded and curious scientist. Through this process, you may bring freshness and clarity into the situation that is both stimulating and catalytic. You do not have to understand it all intellectually. Besides, intuition is your ace in the hole. Respond in a spontaneous manner to what is right in front of you. There is no reason to hold yourself back. Your natural urges are exactly what is needed, and, your ingenuous timing and elegant style will help smooth over any awkwardness.`,
        reverseAdvice: `You may be working against your own creativity. Perhaps you feel that your ideas are too scandalous or too precedent breaking. Perhaps you feel it should be someone else who communicates these insights or challenges. Perhaps you are uncomfortable with taking a leadership position, even a temporary one. Ask yourself what you have to lose. Have the courage of your convictions and speak your truth.`,
        desc: "The Magician card is a reminder that you are a unique being, and have many gifts that others do not hold. These skills set you apart from the crowd, and can help you begin new projects or overcome adversity. When The Magician comes up in your Tarot reading, it's a reminder that you needn't wait -- you already hold everything you need to move forward and accomplish what you've set out to do.",
    },
    thehighpriestess: {
        name: 'The High Priestess',
        suit: 'arcana',
        i: 3,
        advice: `Adhere to your chosen spiritual practice on a more regular basis. If you want the benefits of evolution, you'll have to cooperate with spirit. We all have distractions, demands -- a whole life full of reasons why we cannot find the time to retreat into our inner sanctum. Until you consider this as vital to your well-being as the need to eat and sleep, you are likely to be eternally restless and deeply dissatisfied. A spiritual routine that suits your temperament, practiced every day, is the most trustworthy path to freedom.`,
        reverseAdvice: `When you have problems, it's usually because you are so attracted to your inner life that it has become an addiction in itself. It blots out your interest in ordinary reality, friends, and family -- the connections that hold us fast to our worldly identities. Don't take this card as permission to abandon the world. This is a reminder to balance your outer identifications with internal cultivation, so you can more effectively bring the spiritual world to the material world.`,
        desc: "The most intuitive, connected card in the whole Tarot deck, The High Priestess is a card of awareness and subconsciousness. This card urges you to listen to your inner voice and to follow your instincts. Your mind knows far, far more than you think it does, and The High Priestess embodies this concept. When she arises in your Tarot reading, stop looking for answers in the outside world and instead, turn within for the guidance you seek."
    },
    theempress: {
        name: 'The Empress',
        suit: 'arcana',
        i: 4,
        advice: `Trust in the good sense you have shown up to this point. Recognize your good intentions in carrying out your responsibilities as a compassionate human. You are capable of demonstrating the finest aspects of your personality. Demonstrate this through caring actions, a forgiving and generous attitude, and wise understanding of others' needs and struggles. Bring a healing influence to the current situation and take full credit for the supportive part you play.`,
        reverseAdvice: `Volcanoes, tsunami, hurricanes and the like symbolize violent emotions triggered by ignorant or foolish humans. If you feel like being corrective, you are probably justified, but set limits on how punitive you allow yourself to be. You don't want to go too far and destroy all you have taken so much delight in.`,
        desc: "The Empress is the most feminine card in the Tarot, and greatly encourages compassion, beauty, and love. She is deeply connected to Mother Nature, and her influence is powerful when you absorb the energy of the natural world around you."
    },
    theemperor: {
        name: 'The Emperor',
        suit: 'arcana',
        i: 5,
        advice: `Get in touch with your inner sovereignty and natural self-possession. Realize that somewhere deep inside you is the memory of royalty. Reach within to find that strain of natural nobility and leadership. These innate qualities will help you manage your current situation. The Emperor suggests that you have the necessary abilities to be the final authority. This situation is an opportunity to showcase your competence and skill. Act with the confidence of someone who knows how to take care of business.`,
        reverseAdvice: `There may be a tendency to behave like a petty tyrant, insisting on being indulged, served and flattered. This emperor prefers his own version of events to what is actually true and as such risks losing the respect of his people. Try to curb whatever arrogance might be distorting your point of view. Remember that, though the emperor looks like the king, he is the servant of everyone in his realm. If he doesn't serve well, the negative impact of his own defects are what will bring him down.`,
        desc: "The Emperor is a card of leadership and power. He is an authoritative force who has been through many experiences to achieve this status. He represents structure and solidity, and reminds you that you, too, hold immense amounts of power over your own life, and what happens to it."
    },
    thehierophant: {
        name: 'The Hierophant',
        suit: 'arcana',
        i: 6,
        advice: `Return to the role of a meticulous student. Learn everything you can about your chosen area. Let that knowledge become a part of you and an operative influence on your day-to-day awareness. In this way, you can slowly and steadily establish real credibility in your field or chosen subject. Earn respect and recognition by completing your education and broadening your experience. If you already have all the necessary experience you need, then rewrite your resume so others can appreciate who you are and what you can bring to a situation. Focus on your goal and be determined. You may be destined to be a master in your realm.`,
        reverseAdvice: `You bring an unnecessary episode of rebellion against traditional, long held ideals and spiritual beliefs that belong to your lineage. Be aware that without the steadying influence of tradition observed from generation to generation, there would be no stable support system within which you could afford to rebel. Get a sense of whether you are biting the hand that feeds you. Take care lest you damage your right relationship to the Great Mystery.`,
        desc: "The Hierophant is like a messenger from the heavens. He is experienced in spirituality and guidance, and his job is to bring these lessons down to us here in the real world. When The Hierophant comes up in your Tarot reading, you're encouraged to follow the rules, and to find a spiritual perspective on your current situation."
    },
    thelovers: {
        name: 'The Lovers',
        suit: 'arcana',
        i: 7,
        advice: `Study your options and make the wisest choice. Carefully consider your long-term interests. There is no judgment on what you choose to keep from the array of possibilities before you. Just watch out for choices that will produce dissatisfaction and discontent. Be willing to make some compromises, then stick with the commitments you finally make. Trust your intuition along with your rational intellect, and once you make your choice, carry it out with conviction.`,
        reverseAdvice: `You are going along with a divided situation because you have a vested interest in opposition. You can't resolve this situation until you own up to your own double standard. Admit the resistance you feel, instead of proceeding halfheartedly or with unspoken resentments. In such an important area of your life, you should not just go along to get along.`,
        desc: "It's no surprise The Lovers card represents the close relationships in your life. If it comes up in your Tarot reading, your love life is in need of extra focus and attention. However, this is just as much a card about your values and decisions. You may find The Lovers come up when you are at a crossroads, and must consider all the possible consequences of your choices."
    },
    thechariot: {
        name: 'The Chariot',
        suit: 'arcana',
        i: 8,
        advice: `Be prepared for changes that might include a move or an opportunity to travel. The Charioteer travels light and stays open to fresh experiences that change with every valley or mountain pass. You may be asked to live out of a suitcase and consider every place your home for a while. Be receptive to new people who come into your life. Most especially, become more fluid and taste the joys of freedom. The Charioteer is nothing if not self-sufficient. Be prepared and self-contained for the changes that will sweep in and carry you with them.`,
        reverseAdvice: `You may balk when you know you need to pick up the reins and take responsibility for setting your life in motion. You know you could instigate change, but you haven't yet chosen to move toward it. You may be holding back for what feels like good reasons, but nothing is actually being imposed upon you; you do have other options. Own your own inner resistance instead of blaming circumstances.`,
        desc: "The Chariot card is connected to your natural drive and determination, and can indicate an upcoming victory. This card reminds you that your greatest successes won't come through limited thinking -- when you combine the knowledge of your mind with that of your heart and spirit, you are an unstoppable force."
    },
    strength: {
        name: 'Strength',
        suit: 'arcana',
        i: 9,
        advice: `You assertively discipline yourself and separate self interest from enlightened wisdom. Deliberately identify with your intuition, even if it works against the desires of your willful ego. Demand and expect the same from others who have some power in this situation. You cannot challenge them to live to a higher standard if you, yourself, have not yet done so. Influence others by setting an example of integrity. Your self-esteem will increase to the degree that you succeed in your efforts.`,
        reverseAdvice: `You are in a position where you have little power to affect behavior. No amount of modeling, persuasion or leadership will affect the out-of-control, untamed force that is set loose. Subtleties are overlooked, and the inducements which have served in the past to reward order may meet with scorn. You may have to lay low and do what you can to preserve yourself, and let this upside down time blow over.`,
        desc: "One of the most obviously named cards in a Tarot deck, Strength is most definitely a card about strength -- but not physical strength. The Strength card represents the fortitude of your heart, your level of courage, and your ability to withstand anything life hands you. If this card arises in your Tarot reading, you are reminded that you are strong enough to handle whatever you are facing -- and will come out of it with even more power than you had before. "
    },
    thehermit: {
        name: 'The Hermit',
        suit: 'arcana',
        i: 10,
        advice: `Think things through carefully. The demands on you have been high, giving you scant time for reflection. While you have a gift for understanding the larger implications involved, you need some private time to consider the steps to take in the future. You can't just lock yourself in your room for fifteen minutes and expect to come up with profound solutions. You need more seclusion and time to assimilate and process. Now may be the moment for you to tell everyone to leave you alone. When you are fully ready, you will be able and willing to give others what they need.`,
        reverseAdvice: `You may be resisting the process of evolving towards a level of wisdom that sets you apart. Fear of the path is haunting you; it could be a fear of loneliness. Try to remember that the shamanic method for facing fears is to relax and open. Let them in and allow them to have their way for a while. This way you know them fully and will see them pass of their own accord. When there are no more surprises, you can move into a place of empowered action.`,
        desc: "The Hermit yearns to be alone. He knows that the only way to process what is happening in life is to withdraw from the noise of the world and create a quiet space of solitude. When The Hermit comes up in your reading, the answers you need will come from within. Be very still, and listen..."
    },
    wheeloffortune: {
        name: 'Wheel of Fortune',
        suit: 'arcana',
        i: 11,
        advice: `Follow the flow of events. Physical moves, spiritual awakenings, or dramatically changing social patterns could arise now. Accept these transformations. This is a safe place for you to be. You are watched over and protected as you go round and round the wheel. You will learn a lot. You will also learn it quickly, and what you absorb will benefit you for a long time to come.`,
        reverseAdvice: `You may have dropped from the heights and have been sent back to the beginning -- to either start over or reframe your plan. This may feel as if you have hit bottom, but think of it as a chance to renew yourself and chart a path that will help you rise from the ashes. You will be a more compassionate and wise ally when the next person takes a nosedive. In the future, you might want to be a little more modest in your aspirations.`,
        desc: "The Wheel of Fortune is constantly revolving -- sometimes you will be at the top, and sometimes you will be at the bottom. This Tarot card reminds you that nothing is permanent, and, good or bad, you must cherish the lessons that this moment is bringing you."
    },
    justice: {
        name: 'Justice',
        suit: 'arcana',
        i: 12,
        advice: `Listen carefully as others explain to you their version of events and the parts they played. It is unnecessary to offer feedback. Your role is to observe, listen closely, give a full hearing and keep your wits about you as the story takes shape. As you witness people's account of themselves, your understanding will go beyond the words you hear. Subtle inferences and clues will reveal the truths that will enable you to make a wise and accurate assessment.`,
        reverseAdvice: `The deeper meaning of this situation is being withheld for reasons only Higher Power truly understands. There are times that logical, common, rational and organic laws are overridden by some paradoxical higher order. At such times you won't be fully informed about what is going on. Wait, stay quiet, keep watching and listening. Eventually the chaos will resolve itself and the truth will be revealed.`,
        desc: "Justice is your firm-but-fair reminder that karma is real, and there is a consequence for every action. Whatever life is handing you at this moment comes from decisions you've made in the past, and whether it's a punishment or a reward, it is exactly what you deserve. When this card comes up in your Tarot reading, make sure you are acting fairly in all your interactions with others."
    },
    thehangedman: {
        name: 'The Hanged Man',
        suit: 'arcana',
        i: 13,
        advice: `Surrender illusions of control. Accept that you have been overcome and deceived by your own devices. Having made your bed, you now need to lie in it. This is not a negative judgment. It's just that sometimes there are consequences for being in the wrong place at the wrong time. Bad things can happen to good people. These consequences are not fatal, even if they are inconvenient -- or perhaps even embarrassing. Stop resisting your circumstances and let some time go by. Eventually, you will be released a little wiser and not much the worse for wear. You will come to realize in time how you collaborated with the problem. However, the issues you were stuck on when you were first hung up have subsided and no longer concern you. You are free to take up new endeavors. You will ultimately feel refreshed and grateful that you were derailed from your former track.`,
        reverseAdvice: `The seemingly noble deed of offering yourself as the sacrificial lamb is, at least for the time being, a useless gesture. There will be no benefit to the greater good; you will experience no expansion of consciousness. It would be an empty move, so don't put yourself in that position. Ask yourself on what basis you allowed yourself to hope that your sacrifice would make a difference in this situation. Who knows? Perhaps this is meant to be an opportunity to learn something about self-denying tendencies.`,
        desc: "The Hanged Man is a card that comes up when you are in limbo. He tells you that sometimes small sacrifices must be made in order to benefit the bigger picture. When The Hanged Man arises in your reading, you likely want to make a move, but don't even know where to begin. Begin by letting go. Lightening your grip on something that's no longer working for you or detaching from the outcome of your situation can help you release yourself."
    },
    death: {
        name: 'Death',
        suit: 'arcana',
        i: 14,
        advice: `Detach from the old order. You may want to close accounts, complete unfinished tasks, and gather your harvest. It is time to move on. If you cut the cords that have bound you to old ways and outdated conventions, you could free yourself to join the sweep of incoming light. This is not an excuse to reject others or hurt them in any way. It is simply a time to move toward your ultimate interests. Do not allow nostalgia and outworn loyalties to hold you back. Be willing to go through whatever it takes to get to where you really want to be.`,
        reverseAdvice: `You might long for the cord to be cut, but unfortunately you have to persist and endure without the relief of an ending. It is not time for termination and closure yet. Be patient with the current circumstances without resigning yourself to a negative outcome. Coming changes may alter the way you feel about the status quo. Remember that harvest isn't started until the fruit is ripe. Work at becoming wiser and more mellow, sweeter and more nourishing, and your time of release may happen sooner.`,
        desc: "One of the most misunderstood cards in a Tarot deck, Death is not a card about physical death. The Death card speaks of cycles -- endings, yes, but beginnings too -- and is a reminder that all things must pass. Hanging on to relationships, feelings, fears, or situations from the past will hinder you from allowing new, better things to enter your life. Take comfort in knowing that in every ending lies a chance for a new beginning."
    },
    temperance: {
        name: 'Temperance',
        suit: 'arcana',
        i: 15,
        advice: `Identify and seek the missing ingredients in your life. Marshal your known skills and abilities and do what needs to be done to complete your mission. Prepare to use spiritual practices, studies, or lifestyle changes that can assist you in your quest. A tremendous amount of benefit is available if you can organize yourself and be disciplined at this time.`,
        reverseAdvice: `You are in danger of giving up on yourself. Something is making you feel apathetic and ignore what you deeply want and need. You may be morbidly overemphasizing the chaos and disruption that would come with change and growth rather than focusing on the regeneration and liberation that could be yours. Try to carve out a day in which you do only activities that make you happy. Eat well and get some rest, then take another look at your life. If you do not gain a better perspective, seek help.`,
        desc: "The Temperance card is a master of moderation. She encourages peace and patience, and reminds you to go with the flow of your life instead of trying to force its pace or direction. When Temperance turns up in your Tarot reading, it is a message to take things as they come, and remain flexible enough to change with the changes."
    },
    thedevil: {
        name: 'The Devil',
        suit: 'arcana',
        i: 16,
        advice: `Show some spunk. There may be nothing to be gained by trying to be subtle or strategic in this situation. Assert your agenda, express yourself honestly, and let the chips fall where they may. Your best bet could be to express your true emotions, possibly even including anger. Acknowledge that you have whatever feelings you have. While it may not be necessary to act out what you feel in every situation, accepting the power and depth of your inner experience enables you to remain true to yourself.`,
        reverseAdvice: `You are enjoying creating chaos and resistance for no particular, positive reason. Your sense of humor could be a bit twisted. Your motive may be vengeance or you are simply being an irritant. The juvenile prankster streak in you must be corralled and changed before it gets you into further trouble. Suppress those impulses until you successfully engineer a shift away from this careless behavior. Such antics will cost you in the long run even though they seem amusing in the moment.`,
        desc: "The Devil card carries heavy feelings of restraint and powerlessness. When he comes up in your Tarot reading, you are likely feeling like you have no control and are stuck in a situation you don't want to be in. The Devil has convinced you that you have no options, but this couldn't be further from the truth. You are not being trapped by external forces, but by your own limitations or unwillingness to move forward. You hold the keys to your own freedom, but it's up to you to open the lock."
    },
    thetower: {
        name: 'The Tower',
        suit: 'arcana',
        i: 17,
        advice: `Think of yourself as an agent of transformation. This self-sacrificing role is likely to create stressful situations. Your vision shows you that a radical change has already been unleashed by forces much larger than mere mortals, and therefore you are no longer resisting. Now you may be at the forefront, acknowledging and accepting the bracing presence of the future bursting in on the present. Try to mediate the harsher parts of the changes as they unfold, so the most vulnerable are the most cushioned. Acknowledge yourself, as well as the others in your life, who are offering their resources to usher in a better future.`,
        reverseAdvice: `The drama is over. All the leaning towers have fallen. Leave behind the issues and emotions that caused this to happen. Ask yourself what you can do now that the options of your past are closed. As you pick yourself up and begin again, you will find renewed energy for your next significant endeavor.`,
        desc: "Perhaps the most dreaded card in a Tarot deck, The Tower is a representation of destruction. The Tower often comes up when everything in your life feels like its crumbling, and you have no way of stopping it. The message of this card is to just let it fall. The weakest parts of your life must be torn down in order to build something strong and sturdy in their place -- something that can last a lifetime."
    },
    thestar: {
        name: 'The Star',
        suit: 'arcana',
        i: 18,
        advice: `Rededicate yourself to your higher values, increase your spiritual cultivation and meditation practice, and surrender to the greater good. Connect to your higher self -- a being of a larger realm traveling on an evolutionary course that started long ago and runs indefinitely into the future. This is the part you wish to contact and communicate with. Now is a period for quiet contemplation. Listen for the voice within. Anything that would interfere with this communion may not be serving your best interests right now.`,
        reverseAdvice: `You are temporarily alienated from your brilliance and usefulness. You may feel clumsy, unskilled, at odds within your true nature. Perhaps you are forgetting your soul's purpose in this lifetime. Focus on your unique gifts and talents -- their source is divine. It's your job to learn how to apply them in any situation your life offers you.`,
        desc: "The Star is the embodiment of hope and healing. She is a calming influence that brings messages of renewal, optimism, and inspiration. When The Star comes up in your Tarot reading, she reminds you that the universe is working in your favor, and encourages you to have faith in where you are being taken."
    },
    themoon: {
        name: 'The Moon',
        suit: 'arcana',
        i: 19,
        advice: `Trust your instincts and intuitions. Your intuitive body, which is connected to all living things, is sharper and quicker than the cultivated, civilized self. The everyday mind may not be prepared for strange oceanic circumstances. Plus, it has no game plan. Your intuitive body will support you unerringly if you do not interfere with or try to control what you perceive. A better approach would be to meditate. Try to just be a witness. Do nothing; let nature carry you forward. This may be your best option in this situation.`,
        reverseAdvice: `You might be deluding yourself, exaggerating or embellishing your version of a situation. Consider whether you are repeating an emotional, dramatic rendition of events rather than keeping to the bare facts. The temptation to let yourself be swept away emotionally or psychically is understandable, but it doesn't help you find your balanced center in chaotic times.`,
        desc: "The Moon card is greatly connected to your subconscious. It represents the thoughts, feelings, doubts and fears that you carry internally. When The Moon arises in your Tarot reading, you may be feeling anxious, allowing these fears to override the memories of your past and your faith in the future. Do not be deceived -- you can't believe everything that you see, hear ... or think. If you can draw these feelings to the surface and address them, you can rid yourself of worry."
    },
    thesun: {
        name: 'The Sun',
        suit: 'arcana',
        i: 20,
        advice: `Have confidence in your natural divinity. Throw off any cultural conditioning that keeps you from being authentic with yourself. Step into the full light of truth and reveal your motives and principles. Once done, you will no longer give away power to the people that criticize and shame you. Focus on the positive and the real. Your authentic shining self can be a light for others if you project it without contrivance.`,
        reverseAdvice: `Perhaps you will choose to take extra care to humbly count your blessings and give credit to all that have contributed to your successes. Perhaps you can create a program of giving, volunteering or bringing as many people into your good fortune as you sensibly can. Satisfy your conscience that you are a wise steward of your good fortune.`,
        desc: "The Sun is a powerfully uplifting card, representing happiness, joy, vitality, and optimism. When The Sun comes up in your Tarot reading, it is an positive sign that things are working well for you and that you're moving in the right direction. Lift your head and realize all the good situations and people that are surrounding you now and always."
    },
    judgement: {
        name: 'Judgement',
        suit: 'arcana',
        i: 21,
        advice: `Allow yourself to grow, transform, and release hidden potentials within yourself. Divest yourself of fruitless endeavors without neglecting your duties. At the same time, invest your energies in new growth. It's not necessary to reject others, but refuse to be manipulated by those who cry foul. This process isn't about them anyway. It is about you and the desire you feel to change your life and become a more complete person. Trust your impulses and allow this remarkable awakening to happen.`,
        reverseAdvice: `You feel like you are bumping into externally imposed restrictions, even if you thought you had let go of limitations. If that's the case, you need to accommodate those inexplicable blockages wherever they appear, without allowing the growth force rising within you to diminish. Like water, you will find the openings and seep through, to move past whatever has been holding you back. Keep flowing and you will succeed.`,
        desc: "Judgment is a card where your past and your future come together. You are being called on to review your decisions and your actions until now, to ensure they are in-line with where you ultimately want to go. The Judgment card reminds you that your future is not set in stone, and that it's never too late to make a change for the better."
    },
    theworld: {
        name: 'The World',
        suit: 'arcana',
        i: 22,
        advice: `Presently, your motivation is close to the will of the divine. Even if you commit an error, it will be turned to the greater good. Stay active and just keep moving forward. It is unnecessary to keep checking or interrupting your spontaneity with calculation. Rather than look for consensus or affirmation from others, simply dance the dance. In other words, express yourself, react naturally, and let the chips fall where they may. What matters is divine intention. Whether or not human beings approve is less important. If you allow your ego to inflate, however, you cease to be useful to the greater plan.`,
        reverseAdvice: `A slight slowdown in the flow of events or the need for more introspection as events unfold. Practice trusting and relaxing into the nurturing support of the Great Mother Goddess, while things sort themselves out.`,
        desc: "The World is the last card of the Major Arcana, and represents completion, success, and fulfillment. When she arises in your Tarot Reading, The World shows you that you are exactly where you are meant to be on your path. You have a greater understanding of who you are after all you've been through, and you're ready for the next phase of your journey."
    },
} }