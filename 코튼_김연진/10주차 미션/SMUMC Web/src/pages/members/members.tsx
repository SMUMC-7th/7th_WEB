import { useContext, useState, useMemo } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Profile from '../../components/members/profile/profile';
import * as S from './members.style';
import { MEMBERS } from '../../mocks/profile';

const Members = () => {
    const { theme } = useContext(ThemeContext);
    const [isClicked, setIsClicked] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(7);

    const handleYearSelect = (year: number) => {
        setSelectedYear(year);
        setIsOpen(false);
    };

    const groupedMembers = useMemo(() => {
        const groups = {
            회장단: MEMBERS.filter(
                (member) =>
                    (member.position === '회장' ||
                        member.position === '부회장') &&
                    member.year === selectedYear
            ),
            파트장: MEMBERS.filter(
                (member) =>
                    member.position === '파트장' && member.year === selectedYear
            ),
            챌린저: MEMBERS.filter(
                (member) =>
                    member.position === '챌린저' && member.year === selectedYear
            ).reduce((acc, member) => {
                (acc[member.part] = acc[member.part] || []).push(member);
                return acc;
            }, {} as Record<string, typeof MEMBERS>),
        };
        return groups;
    }, [selectedYear]);

    return (
        <S.Container>
            <S.Title islight={theme}>역대 UMC 멤버</S.Title>
            <S.Nav>
                <S.Button
                    islight={theme}
                    onClick={() => {
                        setIsClicked(0);
                        setSelectedYear(7);
                    }}
                    isclicked={isClicked === 0}
                >
                    Active Member
                </S.Button>
                <S.Button
                    islight={theme}
                    onClick={() => setIsClicked(1)}
                    isclicked={isClicked === 1}
                >
                    Member List
                </S.Button>
            </S.Nav>

            {isClicked === 1 && (
                <div>
                    <S.Select
                        id="year-select"
                        onClick={() => setIsOpen(!isOpen)}
                        islight={theme}
                    >
                        {selectedYear === 0 ? '기수 선택' : `${selectedYear}기`}
                        <S.ArrowDown
                            islight={theme}
                            onClick={() => setIsOpen(!isOpen)}
                        ></S.ArrowDown>
                        {isOpen && (
                            <S.Options>
                                {[7, 6, 5, 4, 3, 2].map((year) => (
                                    <S.Option
                                        key={year}
                                        onClick={() => handleYearSelect(year)}
                                        isopen={isOpen}
                                        islight={theme}
                                    >
                                        {year}기
                                    </S.Option>
                                ))}
                            </S.Options>
                        )}
                    </S.Select>
                </div>
            )}

            {groupedMembers.회장단.length > 0 && (
                <>
                    <S.SubTitle islight={theme}>회장단</S.SubTitle>
                    <S.Members>
                        {groupedMembers.회장단.map((member) => (
                            <Profile key={member.id} {...member} />
                        ))}
                    </S.Members>
                </>
            )}

            {groupedMembers.파트장.length > 0 && (
                <>
                    <S.SubTitle islight={theme}>파트장</S.SubTitle>
                    <S.Members>
                        {groupedMembers.파트장.map((member) => (
                            <Profile key={member.id} {...member} />
                        ))}
                    </S.Members>
                </>
            )}

            {Object.keys(groupedMembers.챌린저).map(
                (part) =>
                    groupedMembers.챌린저[part].length > 0 && (
                        <div key={part}>
                            <S.SubTitle islight={theme}>{part}</S.SubTitle>
                            <S.Members>
                                {groupedMembers.챌린저[part].map((member) => (
                                    <Profile key={member.id} {...member} />
                                ))}
                            </S.Members>
                        </div>
                    )
            )}
        </S.Container>
    );
};

export default Members;
