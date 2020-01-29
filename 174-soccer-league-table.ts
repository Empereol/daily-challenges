interface Match {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
}

interface TeamData {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
  wins: number;
  draws: number;
  losses: number;
}

enum Point {
  win = 3,
  draw = 1,
  loss = 0
}

class LeagueTable {
  private matches: Match[] = [];
  private teams: Record<string, TeamData> = {};

  constructor() {}

  public push(matchString: string): Match {
    const match: Match = this.parseMatchString(matchString);
    this.matches.push(match);

    const home = this.updateTeam(
      match.homeTeam,
      match.homeScore,
      match.awayTeam,
      match.awayScore
    );

    const away = this.updateTeam(
      match.awayTeam,
      match.awayScore,
      match.homeTeam,
      match.homeScore
    );

    this.teams = { ...this.teams, [home.name]: home, [away.name]: away };

    return match;
  }

  public getPoints(team: string): number {
    const { draws, wins, losses } = this.getTeam(team);
    return wins * Point.win + draws * Point.draw + losses * Point.loss;
  }

  public getGoalsFor(team: string): number {
    return this.getTeam(team).goalsFor;
  }

  public getGoalsAgainst(team: string): number {
    return this.getTeam(team).goalsAgainst;
  }

  public getGoalDifference(team: string): number {
    const { goalsFor, goalsAgainst } = this.getTeam(team);
    return goalsFor - goalsAgainst;
  }

  public getWins(team: string): number {
    return this.getTeam(team).wins;
  }

  public getDraws(team: string): number {
    return this.getTeam(team).draws;
  }

  public getLosses(team: string): number {
    return this.getTeam(team).losses;
  }

  public getTable(): string {
    return Object.keys(this.teams)
      .map(key => this.teams[key])
      .reduce((prev, curr, idx, arr) => {
        return (
          prev + `${curr.name}\t${curr.wins}\t${curr.draws}\t${curr.losses}\n`
        );
      }, "Name \t\t\t W \t\t\t D \t\t\t L\n");
  }

  private createTeam(name: string): TeamData {
    const team: TeamData = {
      name,
      draws: 0,
      goalsAgainst: 0,
      goalsFor: 0,
      losses: 0,
      wins: 0
    };

    this.teams = { ...this.teams, [team.name]: team };

    return team;
  }

  private getTeam(team: string): TeamData {
    return this.teams[team] || this.createTeam(team);
  }

  private parseMatchString(matchString: string): Match {
    const regex = new RegExp(/([\S|\s]+) (\d+) - (\d+) ([\S|\s]+)/);
    const [full, homeTeam, homeScore, awayScore, awayTeam] = matchString.match(
      regex
    );

    return {
      homeTeam,
      homeScore: parseFloat(homeScore),
      awayTeam,
      awayScore: parseFloat(awayScore)
    };
  }

  private updateTeam(
    teamName: string,
    teamScore: number,
    opponentName: string,
    opponentScore: number
  ): TeamData {
    const team = { ...this.getTeam(teamName) };

    team.goalsFor += teamScore;
    team.goalsAgainst += opponentScore;
    team.wins += teamScore > opponentScore && 1;
    team.draws += teamScore === opponentScore && 1;
    team.losses += teamScore < opponentScore && 1;

    return { ...team };
  }
}

(() => {
  const lt = new LeagueTable();

  const instructions = [
    'lt.push("Man Utd 3 - 0 Liverpool")',
    'lt.getGoalsFor("Man Utd")',
    'lt.getPoints("Man Utd")',
    'lt.getPoints("Liverpool")',
    'lt.getGoalDifference("Liverpool")',
    'lt.push("Liverpool 1 - 1 Man Utd")',
    'lt.getGoalsFor("Man Utd")',
    'lt.getPoints("Man Utd")',
    'lt.getPoints("Liverpool")',
    'lt.getGoalsAgainst("Man Utd")',
    'lt.getPoints("Tottenham")'
  ];

  for (const fn of instructions) {
    console.log(fn, eval(fn));
  }

  console.log(lt.getTable());
})();
