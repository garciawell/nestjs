import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report-dto';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: CreateReportDto, user: User) {
    const reports = this.repo.create(reportDto);
    reports.user = user;

    return this.repo.save(reports);
  }

  async changeApproval(id: string, isApproved: boolean) {
    const report = await this.repo.findOne({
      where: {
        id: parseInt(id),
      },
    });

    if (!report) {
      throw new NotFoundException('report not found');
    }

    report.isApproved = isApproved;

    return this.repo.save(report);
  }
}
