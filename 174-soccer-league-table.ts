interface Match {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
}

interface Team {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
  wins: number;
  draws: number;
  losses: number;
}

enum GamePoint {
  win = 3,
  draw = 1,
  loss = 0
}

class LeagueTable {
  private matches: Match[] = [];
  private teams: Record<string, Team> = {};

  constructor() {}

  public rebuild(): void {
    // TODO: Rebuild the team data from the stored matches
    // Like event sourcing
    console.log('LeagueTable.rebuild() not yet implmented.');
  }

  public push(matchString: string): Match {
    const match: Match = this.parseMatchString(matchString);

    if (!match) {
      console.warn('Match string was invalid', matchString);
      return;
    }

    this.matches.push(match);

    const home = this.updateTeam(match.homeTeam, match.homeScore, match.awayScore);
    const away = this.updateTeam(match.awayTeam, match.awayScore, match.homeScore);

    this.teams = {
      ...this.teams,
      [home.name]: home,
      [away.name]: away
    };

    return match;
  }

  public getPoints(team: string): number {
    const { draws, wins, losses } = this.getTeam(team);
    return wins * GamePoint.win + draws * GamePoint.draw + losses * GamePoint.loss;
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
    const pad = 4;
    const firstPad = pad * 4;
    const lastPad = 0;

    const header =
      'Name'.padEnd(firstPad) + 'PTS'.padEnd(pad) + 'W'.padEnd(pad) + 'D'.padEnd(pad) + 'L'.padEnd(lastPad) + '\n';

    return Object.values(this.teams).reduce((table, team) => {
      const name = team.name.padEnd(firstPad);
      const wins = team.wins.toString().padEnd(pad);
      const draws = team.draws.toString().padEnd(pad);
      const losses = team.losses.toString().padEnd(lastPad);
      const pts = this.getPoints(name)
        .toString()
        .padEnd(pad);

      return table + `${name}${pts}${wins}${draws}${losses}\n`;
    }, header);
  }

  private createTeam(name: string): Team {
    const team: Team = {
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

  private getTeam(team: string): Team {
    return this.teams[team] || this.createTeam(team);
  }

  private parseMatchString(matchString: string): Match {
    const match = matchString.match(new RegExp(/(.+) (\d+) - (\d+) (.+)/));

    if (match.length !== 5) {
      return;
    }

    const [full, homeTeam, homeScore, awayScore, awayTeam] = match;

    return { homeTeam, homeScore: parseFloat(homeScore), awayTeam, awayScore: parseFloat(awayScore) };
  }

  private updateTeam(teamName: string, teamScore: number, opponentScore: number): Team {
    const team = { ...this.getTeam(teamName) };

    team.goalsFor += teamScore;
    team.goalsAgainst += opponentScore;
    team.wins += teamScore > opponentScore && 1;
    team.draws += teamScore === opponentScore && 1;
    team.losses += teamScore < opponentScore && 1;

    return team;
  }
}

(function main() {
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
