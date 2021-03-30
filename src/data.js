import IconSupervisor from './images/icon-supervisor.svg';
import IconTeamBuilder from './images/icon-team-builder.svg';
import IconKarma from './images/icon-karma.svg';
import IconCalculator from './images/icon-calculator.svg';

const colors = {
	red: 'hsl(0, 78%, 62%)',
	skyblue: 'hsl(180, 62%, 55%)',
	yellow: 'hsl(34, 97%, 64%)',
	blue: 'hsl(212, 86%, 64%)',
};

const cardData = [
	{
		id: 1,
		title: 'supervisor',
		desc: 'Monitors activity to identify project roadblocks',
		iconSrc: IconSupervisor,
		borderColor: colors.skyblue,
	},
	{
		id: 2,
		title: 'team builder',
		desc: 'Scans our talent network to create the optimal team for your project',
		iconSrc: IconTeamBuilder,
		borderColor: colors.red,
	},
	{
		id: 3,
		title: 'karma',
		desc: 'Regularly evaluates our talent to ensure quality',
		iconSrc: IconKarma,
		borderColor: colors.yellow,
	},
	{
		id: 4,
		title: 'calculator',
		desc: 'Uses data from past projects to provide better delivery estimates',
		iconSrc: IconCalculator,
		borderColor: colors.blue,
	},
];

export default cardData;