import { Test } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
    let controller: AuthController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [],
            controllers: [AuthController],
        }).compile();

        controller = module.get(AuthController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });

    it('auth should be defined', () => {
        expect(controller.auth()).toBeTruthy();
    });

    it('should return object', () => {
        expect(controller.auth()).toEqual({ authentication: true });
    });
});
